let Query = `
    stock(input: StockInput!): Stock
    allStocks: [Stock]!
`;

let Mutation = `
    createStock(input: StockInput): Stock
    updateStock(input: StockInput): Stock
    deleteStock(input: StockInput): Stock
`;

let Subscription = `
`;

let Type = `
    type Stock {
        _id: String
        amount: Int
        rop: Int
        noe: Int
        sold: Int
        distributor: String
        updatedAt: String
    }
`;

let Input = `
    input StockInput {
        _id: String
        type: String
        amount: Int
        rop: Int
        noe: Int
        sold: Int
        distributor: String
        updatedAt: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
