let Query = `
    user(input: UserInput!): User
    allUsers(filter: UserFilter): [User]!
`;

let Mutation = `
    verifyCredentials(input: UserInput!): User
    registerCredentials(input: UserInput!): User
    updateUser(input: UserInput!): User
    deleteUser(input: UserInput!): User
`;

let Subscription = `
    userUpdate: User
`;

let Type = `
    type User {
        _id: String
        username: String
        name: String
        badge: String
        locked: Boolean
        token: String
        admin: Boolean
        online: Boolean
        createdAt: String
        lastAction: String
    }
`;

let Input = `
    input UserInput {
        id: String
        username: String
        name: String
        badge: String
        locked: Boolean
        token: String
        admin: Boolean
        online: Boolean
        lastAction: String
    }
`;

let Filter = `
    input UserFilter {
        OR: [UserFilter!]
        is_admin: Boolean
    }
`;

let Other = `
    type Custom {
        publishUserUpdate(input: UserInput!): User
    }
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
