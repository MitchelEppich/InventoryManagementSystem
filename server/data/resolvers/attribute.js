const { Attribute } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const Stock = require("./stock");

const resolvers = {
  Attribute: {
    async stock(attribute) {
      return Stock.Query.stock(null, {
        input: { _id: { $in: attribute.stock } }
      });
    }
  },
  Query: {
    attribute: (_, { input }) => {
      return Attribute.find(input);
    },
    allAttributes: _ => {
      return Attribute.find({});
    }
  },
  Mutation: {
    createAttribute: async (_, { input }) => {
      let $ = { ...input };

      // Create Stock Objects
      let stock = [];
      for (let _ of $.stock) {
        stock.push(
          mongoose.Types.ObjectId(
            (await Stock.Mutation.createStock(null, {
              input: {
                ..._
              }
            }))._id
          )
        );
      }
      $.stock = stock;

      let attribute = new Attribute({
        ...$
      });

      await attribute.save();

      return attribute.toObject();
    },
    updateAttribute: async (_, { input }) => {}
  },
  Subscription: {}
};

module.exports = resolvers;
