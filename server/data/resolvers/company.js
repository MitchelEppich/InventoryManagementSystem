const { Company } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Company: {},
  Query: {
    company: (_, { input }) => {
      return Company.find(input);
    },
    allCompanys: _ => {
      return Company.find({});
    }
  },
  Mutation: {
    createCompany: async (_, { input }) => {
      let $ = { ...input };

      let company = new Company({
        ...$
      });

      await company.save();

      return company.toObject();
    },
    updateCompany: async (_, { input }) => {}
  },
  Subscription: {}
};

module.exports = resolvers;
