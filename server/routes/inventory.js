let express = require("express");
const request = require("request-promise");

const uri = "http://127.0.0.1:3001/graphql";
// const uri = "http://138.197.158.74:80/graphql";

let resolvers = require("../data/resolvers");

let router = express.Router();

router.get("/", getInventory);
router.post("/", modifyInventoryStock);

async function getInventory(req, res) {
  let {
    query: { query }
  } = req;

  var options = {
    method: "GET",
    uri: uri + "?query=" + query
  };

  let response = await graphqlRequest(options);
  if (response.error != null) {
    res.send(response.error);
    return;
  }

  res.send(buildVariant(JSON.parse(response.res).data.variant));
}

async function modifyInventoryStock(req, res) {
  let { body } = req;

  let requiredInput = {
    amount: "number",
    sotiId: "string",
    size: "number",
    website: "string"
  };
  let { amount, sotiId, size, website, error } = verifyInput(
    body,
    requiredInput
  );
  if (error != null) {
    res.send(error);
    return;
  }

  var options = {
    method: "GET",
    uri:
      uri +
      "?query=" +
      `{variant(input:{sotiId:"${sotiId}", website:["${website}"]}) {_id,attributes {size, stock {_id}}}}`
  };

  let response = await graphqlRequest(options);
  if (response.error != null) {
    res.send(response.error);
    return;
  }

  let stockId, variant;
  try {
    variant = JSON.parse(response.res).data.variant[0];
    stockId = variant.attributes.find(_ => {
      return _.size == size;
    });
  } catch (e) {
    res.send(
      `SERVER ERROR: Failed to get stock ID (line: 55 path:/routes/inventory.js)`
    );
    return;
  }

  if (stockId == null) {
    res.send(
      `ERROR: Failed to locate an object in ${sotiId.toUpperCase()} of size: ${size}`
    );
    return;
  }

  try {
    stockId = stockId.stock[0]._id;
  } catch (e) {
    console.log(e);
    res.send(
      `SERVER ERROR: Stock does not exist for pack size ${size} in ${sotiId.toUpperCase()}`
    );
    return;
  }

  options = {
    method: "GET",
    uri: uri + "?query=" + `{stock(input:{_id:"${stockId}"}){_id, amount}}`
  };

  response = await graphqlRequest(options);
  if (response.error != null) {
    res.send(response.error);
    return;
  }

  let stock;
  try {
    stock = JSON.parse(response.res).data.stock[0];
  } catch (e) {
    res.send(
      `SERVER ERROR: Failed to get stock object (line: 107 path:/routes/inventory.js)`
    );
    return;
  }

  if (stock == null) {
    res.send(
      `SERVER ERROR: Failed to locate stock object, it may not exists...`
    );
    return;
  }

  options = {
    method: "GET",
    uri:
      uri +
      "?query=" +
      `{strain(input:{variants:"${variant._id}"}){stock{_id,amount}}}`
  };

  response = await graphqlRequest(options);
  if (response.error != null) {
    res.send("SERVER ERROR: " + response.error);
    return;
  }

  let strainStock;
  try {
    strainStock = JSON.parse(response.res).data.strain[0].stock[0];
  } catch (e) {
    res.send(
      `SERVER ERROR: Failed to get strain stock object (line: 136 path:/routes/inventory.js)`
    );
    return;
  }

  if (strainStock == null) {
    res.send(
      `SERVER ERROR: Failed to locate strain stock object, it may not exists...`
    );
    return;
  }

  try {
    strainStock.amountSold = amount * size;
    stock.amountSold = amount;

    resolvers.Mutation.updateStock(null, { input: { ...strainStock } });
    resolvers.Mutation.updateStock(null, { input: { ...stock } });
  } catch (e) {
    res.send(`SERVER ERROR: Failed to update stock...`);
    return;
  }

  res.send("Successfully Updated Stock Amount...");
}

let graphqlRequest = async options => {
  let $ = { error: null, res: null };
  try {
    $.res = await request(options);
  } catch (e) {
    console.log(e);
    let error = JSON.parse(e.error).errors;

    let errors = error.map(_ => {
      let locations = _.locations.map(_ => {
        return `(line: ${_.line})`;
      });
      return `${_.message} ${locations.join(" ")}`;
    });

    $.error = errors.join("\n");
  }

  return $;
};

let buildVariant = variant => {
  try {
    return variant.map(_ => {
      let strain = _.strain;
      let variant = {
        sotiId: _.sotiId,
        sttId: _.sttId,
        alias: _.alias,
        summary: _.summary,
        description: _.description,
        releaseDate: _.releaseDate,
        company: _.company
      };
      let attributes = { price: [], size: [], available: [] };
      for (let $ of _.attributes) {
        attributes.price.push($.price);
        attributes.size.push($.size);
        attributes.available.push($.stock[0].amount);
      }
      return { ...strain, ...variant, ...attributes };
    });
  } catch (e) {
    console.log(e);
    return "SERVER ERROR: Failed while building strain variants... (line:33 path:/routes/inventory.js)";
  }
};

let verifyInput = (input, inputRequired) => {
  let error = [];
  for (let _ of Object.keys(inputRequired)) {
    let requiredType = inputRequired[_];
    let value = input[_];
    let type = getType(value, requiredType);

    if (type == "undefined")
      error.push(
        `ERROR: Failed to provide ${_.toUpperCase()} of type ${requiredType.toUpperCase()}...`
      );
    else if (requiredType != type)
      error.push(
        `ERROR: Failed to provide ${requiredType.toUpperCase()} for ${_.toUpperCase()} instead provided ${type.toUpperCase()}...`
      );

    if (type == "number") inputRequired[_] = parseFloat(input[_]);
    else if (type == "[number]") {
      let arr = [];
      for (let element of $) {
        arr.push(parseFloat(element));
      }
      inputRequired[_] = arr;
    } else inputRequired[_] = input[_];
  }

  if (error.length == 0) error = null;

  return { ...inputRequired, error };
};

let getType = ($, type) => {
  if (type == "number") if (!isNaN($)) $ = parseFloat($);
  if (isNull($) || isUndefined($)) return "undefined";
  if (isString($)) return "string";
  if (isNumber($)) return "number";
  if (isBoolean($)) return "boolean";
  if (isArray($)) {
    for (let element of $) {
      if (!isNaN(element)) element = parseFloat(element);
      if (isString(element)) return "[string]";
    }
    return "[number]";
  }
  if (isObject($)) return "object";
  return "undefined";
};

// Returns if a value is a string
function isString(value) {
  return typeof value === "string" || value instanceof String;
}

// Returns if a value is really a number
function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

// Returns if a value is an array
function isArray(value) {
  return value && typeof value === "object" && value.constructor === Array;
}

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

// Returns if a value is null
function isNull(value) {
  return value === null;
}

// Returns if a value is undefined
function isUndefined(value) {
  return typeof value === "undefined";
}

// Returns if a value is a boolean
function isBoolean(value) {
  return typeof value === "boolean";
}

// Returns if value is a date object
function isDate(value) {
  return value instanceof Date;
}

// router.post("/update", updateUser);

// async function updateUser(req, res) {
//     let _post = req.body;
//     resolvers.Custom.publishUserUpdate(null, {
//         input: { userUpdate: JSON.parse(_post.userUpdate) }
//     });
// }

module.exports = router;
