let Query = `
    company(input: CompanyInput!): Company
    allCompanys: [Company]!
`;

let Mutation = `
    createCompany(input: CompanyInput): Company
    updateCompany(input: CompanyInput): Company
`;

let Subscription = `
`;

let Type = `
    type Company {
        _id: String
        assetsUrl: String
        website: [String]
        phone: [String]
        socials: [String]
        email: String
    }
`;

let Input = `
    input CompanyInput {
        assetsUrl: String
        website: [String]
        phone: [String]
        socials: [String]
        email: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };