let Query = `
    variant(input: VariantInput!): Variant
    allVariants: [Variant]!
`;

let Mutation = `
    createVariant(input: VariantInput): Variant
    updateVariant(input: VariantInput): Variant
`;

let Subscription = `
`;

let Type = `
    type Variant {
        _id: String
        company: Company
        sotiId: String
        sttId: String
        name: String
        description: [String]
        summary: String
        reviews: Review
        releaseDate: String
        attributes: Attribute
    }
`;

let Input = `
    input VariantInput {
        company: CompanyInput
        sotiId: String
        sttId: String
        name: String
        description: [String]
        summary: String
        reviews: ReviewInput
        releaseDate: String
        attributes: AttributeInput
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
