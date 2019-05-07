const { Stock } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const resolvers = {
  Stock: {},
  Query: {
    stock: async (_, { input }) => {
      let $ = { ...input };
      let { limit, skip, cursor } = $;
      ["limit", "skip", "cursor"].map(_ => delete $[_]);
      return Stock.find($)
        .limit(limit)
        .skip(skip || cursor);
    },
    allStocks: _ => {
      return Stock.find({});
    }
  },
  Mutation: {
    createStock: async (_, { input }) => {
      let $ = { ...input };

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

      await stock.save();

      return stock.toObject();
    },
    updateStock: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let options;
      if ($.amountSold == null)
        options = { $set: { amount: $.amount, rop: $.rop, noe: $.noe } };
      else options = { $inc: { sold: $.amountSold, amount: -$.amountSold } };
      let stock = await Stock.findOneAndUpdate({ _id: $._id }, options, {
        new: true,
        upsert: true
      });

      return stock;
    },
    deleteStock: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) return null;

      let stock = await Stock.findOneAndDelete({ _id: $._id });

      return stock;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
