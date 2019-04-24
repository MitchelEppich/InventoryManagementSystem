let Query = `
    review(input: ReviewInput!): Review
    allReviews: [Review]!
`;

let Mutation = `
    createReview(input: ReviewInput): Review
    updateReview(input: ReviewInput): Review
`;

let Subscription = `
`;

let Type = `
    type Review {
        _id: String
        name: String
        body: String
        email: String
        rating: Float
        approved: Boolean
        createdAt: String
    }
`;

let Input = `
    input ReviewInput {
        name: String
        body: String
        email: String
        rating: Float
        approved: Boolean
    }
`;

let Filter = `
`;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
