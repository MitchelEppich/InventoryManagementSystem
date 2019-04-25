let Query = `
    attribute(input: AttributeInput!): Attribute
    allAttributes: [Attribute]!
`;

let Mutation = `
    createAttribute(input: AttributeInput): Attribute
    updateAttribute(input: AttributeInput): Attribute
`;

let Subscription = `
`;

let Type = `
    type Attribute {
        _id: String
        price: Float
        size: Int
        stock: [Stock]
    }
`;

let Input = `
    input AttributeInput {
        price: Float
        size: Int
        stock: [String]
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
