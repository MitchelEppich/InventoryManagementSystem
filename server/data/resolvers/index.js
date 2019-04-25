const User = require("./user");
const Strain = require("./strain");
const Variant = require("./variant");
const Stock = require("./stock");
const Company = require("./company");
const Review = require("./review");
const Attribute = require("./attribute");
const Distributor = require("./distributor");

let imports = [
  User,
  Strain,
  Variant,
  Stock,
  Company,
  Review,
  Attribute,
  Distributor
];

let resolvers = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  if (_ == null) continue;
  let $ = Object.keys(_);
  for (let x of $) {
    let value = _[x];
    if (value == undefined || Object.keys(value).length == 0) continue;
    if (resolvers[x] == null) resolvers[x] = {};
    resolvers[x] = { ...resolvers[x], ...value };
  }
}

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

let parseXml = (order, _itemizing = false) => {
  let _new = {};
  while (order.length != 0) {
    if (order.indexOf("<br/>") == 0) {
      if (!_itemizing) {
        if (_new["item_list"] == null) _new["item_list"] = [];
        order = order.substring(5, order.length);
        _new["item_list"].push(parseXml(order, true));
      } else break;
    }

    _res = acquireAttribute(order);
    _new[_res.key] = _res.value;
    order = _res.string;
  }

  return _new;
};

let acquireAttribute = string => {
  let key = string.indexOf("<") + 1;
  let $key = string.indexOf(">");
  let val = $key + 1;
  let $val = string.substring(key).indexOf("<") + 1;

  let _key = string.substring(key, $key);
  let _value = string.substring(val, $val);

  let $ = string.substring($val).indexOf(">") + $val + 1;

  return { string: string.substring($), key: _key, value: _value };
};

module.exports = resolvers;
