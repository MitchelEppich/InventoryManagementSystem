let Query = `
    distributor(input: DistributorInput!): Distributor
    allDistributors: [Distributor]!
`;

let Mutation = `
    createDistributor(input: DistributorInput): Distributor
    updateDistributor(input: DistributorInput): Distributor
`;

let Subscription = `
`;

let Type = `
    type Distributor {
        _id: String
        country: String
    }
`;

let Input = `
    input DistributorInput {
        country: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
