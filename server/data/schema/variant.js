let Query = `
    variant(input: VariantInput!): [Variant]!
    allVariants: [Variant]!
`;

let Mutation = `
    createVariant(input: VariantInput): Variant
    updateVariant(input: VariantInput): Variant
    deleteVariant(input: VariantInput): Variant
`;

let Subscription = `
`;

let Type = `
    type Variant {
        _id: String
        company: Company
        sotiId: String
        sttId: String
        alias: String
        description: [String]
        summary: String
        reviews: Review
        releaseDate: String
        attributes: [Attribute]
        strain: Strain
    }
`;

let Input = `
    input VariantInput {
        _id: String
        name: String
        website: [String]
        sotiId: String
        sttId: String
        alias: String
        description: [String]
        summary: String
        releaseDate: String
        attributes: [AttributeInput]
        includeStrain: Boolean
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
