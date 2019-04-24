let Query = `
    strain(input: StrainInput!): Strain
    allStrains(filter: StrainFilter): [Strain]!
`;

let Mutation = `
    createStrain(input: StrainInput): Strain
    updateStrain(input: StrainInput): Strain

    typeToDom: [Strain]
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
        location: [String]
    }
`;

let Input = `
    input StrainInput {
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
        location: String

        variants: [StrainVariantInput]

        stock: StrainStockInput
    }

    input StrainVariantInput {
        company: String
        sotiId: String
        name: String
        description: String
        summary: String
        releaseDate: String
        sttId: String
        attribute: StrainAttributeInput
    }

    input StrainAttributeInput {
        price: Float
        size: Int
        stock: StrainStockInput
    }

    input StrainStockInput {
        amount: Int
        rop: Int
        noe: Int
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
