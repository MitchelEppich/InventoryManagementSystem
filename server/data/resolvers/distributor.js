const { Distributor } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Distributor: {},
  Query: {
    distributor: (_, { input }) => {
      return Distributor.find(input);
    },
    allDistributors: _ => {
      return Distributor.find({});
    }
  },
  Mutation: {
    createDistributor: async (_, { input }) => {
      let $ = { ...input };

      let distributor = new Distributor({
        ...$
      });

      await distributor.save();

      return distributor.toObject();
    },
    updateDistributor: async (_, { input }) => {
      let $ = { ...input };

      let distributor = await Distributor.findOneAndUpdate(
        { _id: $._id },
        {
          $set: { ...$ }
        },
        { new: true }
      );

      return distributor;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
