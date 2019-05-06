let Query = `
    location(input: LocationInput!): [Location]
    allLocations: [Location]!
`;

let Mutation = `
    createLocation(input: LocationInput): Location
    updateLocation(input: LocationInput): Location
    deleteLocation(input: LocationInput): Location
`;

let Subscription = `
`;

let Type = `
    type Location {
        _id: String
        distributor: Distributor
        aisle: String
        color: String
        section: String
        updatedAt: String

        limit: Int
        skip: Int
        cursor: Int
    }
`;

let Input = `
    input LocationInput {
        _id: String
        distributor: String
        aisle: String
        color: String
        section: String
        updatedAt: String
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
