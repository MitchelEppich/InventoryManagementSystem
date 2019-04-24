const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

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

let definitions = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  let $ = Object.keys(_);

  for (let x of $) {
    let value = _[x];
    if (value == undefined || value.trim().length == 0) continue;
    if (definitions[x] == null) definitions[x] = "";
    definitions[x] += value;
  }
}

let typeDefs = `
  type Query {
    ${definitions.Query}
  }

  type Subscription {
    ${definitions.Subscription}
  }
  
  ${definitions.Type}
  
  ${definitions.Filter}

  ${definitions.Input}

  ${definitions.Other}

  type Mutation {
    ${definitions.Mutation}
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
