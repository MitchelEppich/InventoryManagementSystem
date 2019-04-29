const { Company } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Company: {},
  Query: {
    company: (_, { input }) => {
      return Company.find(input);
    },
    allCompanies: _ => {
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
    updateCompany: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) return null;

      let company = await Company.findOneAndUpdate(
        { _id: $._id },
        {
          $set: { ...$ }
        },
        { new: true }
      );

      return company;
    },
    deleteCompany: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) return null;

      let company = await Company.findOneAndDelete({ _id: $._id });

      return company;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
