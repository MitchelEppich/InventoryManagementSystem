const { Stock } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

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

      let parent = null;
      if ($._id != null) {
        switch ($.type) {
          case "strain":
            parent = (await require("./strain").Query.strain(null, {
              input: { _id: $._id }
            }))[0];
            break;
          case "attribute":
            parent = (await require("./attribute").Query.strain(null, {
              input: { _id: $._id }
            }))[0];
            break;
        }
      }

      let stock = new Stock({
        ...$
      });

      // if (parent ! = null) {
      //   parent.stock = [...parent.stock, stock._id]
      // }

      await stock.save();

      return stock.toObject();
    },
    updateStock: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let stock = await Stock.findOneAndUpdate(
        { _id: $._id },
        {
          $set: { ...$ }
        },
        { new: true, upsert: true }
      );

      return stock;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
