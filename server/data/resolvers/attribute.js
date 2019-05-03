const { Attribute } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const resolvers = {
  Attribute: {
    async stock(attribute) {
      return require("./stock").Query.stock(null, {
        input: { _id: { $in: attribute.stock } }
      });
    }
  },
  Query: {
    attribute: (_, { input }) => {
      let $ = { ...input };
      let { limit, skip, cursor } = $;
      ["limit", "skip", "cursor"].map(_ => delete $[_]);
      return Attribute.find($)
        .limit(limit)
        .skip(skip || cursor);
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
            (await require("./stock").Mutation.createStock(null, {
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
    updateAttribute: async (_, { input }) => {
      let $ = {
        ...input
      };

      // Update Stock Objects
      let newStocks = [];
      if ($.stock != null) {
        for (_ of $.stock) {
          let id = mongoose.Types.ObjectId(
            (await require("./stock").Mutation.updateStock(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newStocks.push(id);
        }
        delete $.stock;
      }

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let attribute = await Attribute.findOneAndUpdate(
        {
          _id: $._id
        },
        {
          $set: {
            ...$
          },
          $push: { stock: newStocks }
        },
        {
          new: true,
          upsert: true
        }
      );

      return attribute;
    },
    deleteAttribute: async (_, { input }) => {
      let $ = {
        ...input
      };

      if ($._id == null) return null;

      let attribute = await Attribute.findOneAndDelete({ _id: $._id });

      if (attribute == null) return null;

      if (attribute.stock != null) {
        for (_ of attribute.stock) {
          require("./stock").Mutation.deleteStock(null, {
            input: {
              _id: _
            }
          });
        }
      }

      return attribute;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
