let Query = `
    strain(input: StrainInput!): [Strain]
    allStrains(filter: StrainFilter): [Strain]!
`;

let Mutation = `
    createStrain(input: StrainInput): Strain
    updateStrain(input: StrainInput): Strain
    deleteStrain(input: StrainInput): Strain
`;

let Subscription = `
`;

let Type = `
    type Strain {
        _id: String
        name: String
        category: Int
        breeder: String
        origin: [Int]
        cbd: [Float]
        thc: [Float]
        cbn: [Float]
        effect: [Int]
        yield: [Int]
        genetic: Int
        flowerTime: [Int]
        difficulty: Int
        indica: Float
        sativa: Float
        ruderalis: Float
        type: Int
        environment: Int
        relations: [String]
        variants: [Variant]
        stock: [Stock]
        location: [Location]
    }
`;

let Input = `
    input StrainInput {
        _id: String
        name: String
        category: Int
        breeder: String
        origin: [Int]
        cbd: [Float]
        thc: [Float]
        cbn: [Float]
        effect: [Int]
        yield: [Int]
        genetic: Int
        flowerTime: [Int]
        difficulty: Int
        indica: Float
        sativa: Float
        ruderalis: Float
        environment: Int
        location: [LocationInput]

        variants: [VariantInput]
        variants: String

        stock: [StockInput]

        updatedAt: String

        limit: Int
        skip: Int
        cursor: Int
    }
`;

let Filter = `
    input StrainFilter {
        OR: [StrainFilter!]
        genetic: Int
        nameContains: String
    }
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
