const { Stock } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Stock: {},
  Query: {
    stock: (_, { input }) => {
      return Stock.find(input);
    },
    allStocks: _ => {
      return Stock.find({});
    }
  },
  Mutation: {
    createStock: async (_, { input }) => {
      let $ = { ...input };

      let stock = new Stock({
        ...$
      });

      await stock.save();

      return stock.toObject();
    },
    updateStock: async (_, { input }) => {}
  },
  Subscription: {}
};

module.exports = resolvers;
