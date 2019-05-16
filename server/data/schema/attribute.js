let Query = `
    attribute(input: AttributeInput!): [Attribute]
    allAttributes: [Attribute]!
`;

let Mutation = `
    createAttribute(input: AttributeInput): Attribute
    updateAttribute(input: AttributeInput): Attribute
    deleteAttribute(input: AttributeInput): Attribute
`;

let Subscription = `
`;

let Type = `
    type Attribute {
        _id: String
        price: Float
        wholesale: Float
        size: Int
        stock: [Stock]
        updatedAt: String
    }
`;

let Input = `
    input AttributeInput {
        _id: String
        price: Float
        wholesale: Float
        size: Int
        stock: [StockInput]
        updatedAt: String

        limit: Int
        skip: Int
        cursor: Int
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
