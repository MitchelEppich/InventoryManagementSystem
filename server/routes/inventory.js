let express = require("express");
const request = require("request-promise");

const {
  environment,
  difficulty,
  genetic,
  country
} = require("../../store/data/stainDataCatalgue");

const uri = "http://127.0.0.1:3001/graphql";
// const uri = "http://138.197.158.74:80/graphql";

let resolvers = require("../data/resolvers");

let router = express.Router();

router.get("/", getInventory);
router.post("/", modifyInventoryStock);

async function getInventory(req, res) {
  let {
    query: { query, include }
  } = req;

  if (include == null) include = "";

  var options = {
    method: "GET",
    uri: uri + "?query=" + query
  };

  let response = await graphqlRequest(options);
  if (response.error != null) {
    res.send(response.error);
    return;
  }

  res.send(buildVariant(JSON.parse(response.res).data.variant, include));
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

let buildVariant = (variant, include) => {
  let includeString = include.includes("s");
  let includeAverage = include.includes("a");

  try {
    return variant.map(_ => {
      let strain = _.strain;
      strain.environment = environment[strain.environment];
      strain.difficulty = difficulty[strain.difficulty];
      strain.genetic = genetic[strain.genetic];
      strain.origin = strain.origin.map(a => country[a]);
      let variant = {
        sotiId: _.sotiId,
        sttId: _.sttId,
        alias: _.alias,
        summary: _.summary,
        description: _.description,
        releaseDate: _.releaseDate,
        company: _.company
      };

      variant.alias = variant.alias
        .toLowerCase()
        .replace("cannabis", "")
        .replace("seeds", "")
        .replace("feminized", "")
        .replace("autoflower", "");
      if (strain.genetic != 4)
        variant.alias = variant.alias.replace(strain.genetic, "");
      else variant.alias = variant.alias.replace("mix", "mixed");
      variant.alias = variant.alias.replace(/\s+/g, " ").trim();

      // Set Type
      if (strain.sativa > 0.6) strain.type = "Sativa";
      else if (strain.indica > 0.6) strain.type = "Indica";
      else strain.type = "Hybrid";

      let attributes = { price: [], wholesale: [], size: [], available: [] };
      for (let $ of _.attributes) {
        attributes.price.push($.price);
        attributes.wholesale.push($.wholesale);
        attributes.size.push($.size);
        attributes.available.push($.stock[0].amount);
      }

      let included = {};
      if (includeString) {
        included.sPrice = `$${attributes.price[0].toFixed(
          2
        )} to $${attributes.price.slice(-1)[0].toFixed(2)}`;
        included.sSize = `${attributes.size[0]} to ${
          attributes.size.slice(-1)[0]
        }`;
        included.sWholesale = `$${attributes.wholesale[0].toFixed(
          2
        )} to $${attributes.wholesale.slice(-1)[0].toFixed(2)}`;
        included.sSize = `${attributes.size[0]} to ${
          attributes.size.slice(-1)[0]
        }`;
        included.sIndica = `${Math.round(strain.indica * 100)}%`;
        included.sSativa = `${Math.round(strain.sativa * 100)}%`;
        included.sRuderalis = `${Math.round(strain.ruderalis * 100)}%`;
        included.sOrigin =
          strain.origin.length > 1
            ? strain.origin.slice(0, -1).join(", ") +
              " and " +
              strain.origin.slice(-1)
            : strain.origin[0];
        included.sFlowerTime = strain.flowerTime.join(" to ") + " Weeks";
        included.sYield =
          strain.yield[0] == strain.yield[1]
            ? strain.yield[1] + "g"
            : strain.yield.map(a => a + "g").join(" to ");
      }

      if (includeAverage) {
        included.aYield =
          strain.yield.length != 0
            ? strain.yield.reduce((a, b) => (b += a)) / 2
            : 0;
      }

      return { ...strain, ...variant, ...attributes, ...included };
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
