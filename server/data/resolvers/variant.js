const { Variant } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const resolvers = {
  Variant: {
    async company(variant) {
      return (await require("./company").Query.company(null, {
        input: { _id: variant.company }
      }))[0];
    },
    attributes(variant) {
      return require("./attribute").Query.attribute(null, {
        input: { _id: { $in: variant.attributes } }
      });
    }
  },
  Query: {
    variant: (_, { input }) => {
      return Variant.find(input);
    },
    allVariants: _ => {
      return Variant.find({});
    }
  },
  Mutation: {
    createVariant: async (_, { input }) => {
      let $ = {
        ...input
      };

      // Query Company ID
      $.company = mongoose.Types.ObjectId(
        (await require("./company").Query.company(null, {
          input: {
            name: $.name
          }
        }))[0]._id
      );
      delete $.name;

      // Create Attribute Objects
      let attributes = [];
      for (_ of $.attributes) {
        attributes.push(
          mongoose.Types.ObjectId(
            (await require("./attribute").Mutation.createAttribute(null, {
              input: {
                ..._
              }
            }))._id
          )
        );
      }
      $.attributes = attributes;

      let variant = new Variant({
        ...$
      });

      await variant.save();

      return variant.toObject();
    },
    updateVariant: async (_, { input }) => {
      let $ = {
        ...input
      };
      let newAttributes = [];
      if ($.attributes != null) {
        for (_ of $.attributes) {
          let id = mongoose.Types.ObjectId(
            (await require("./attribute").Mutation.updateAttribute(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newAttributes.push(id);
        }
        delete $.attributes;
      }

      // Updated Company ID
      $.company = mongoose.Types.ObjectId(
        (await require("./company").Query.company(null, {
          input: {
            name: $.name
          }
        }))[0]._id
      );
      delete $.name;

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let variant = await Variant.findOneAndUpdate(
        {
          _id: $._id
        },
        {
          $set: {
            ...$
          },
          $push: {
            attributes: newAttributes
          }
        },
        {
          new: true,
          upsert: true
        }
      );

      return variant;
    },
    deleteVariant: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) return null;

      let variant = await Variant.findOneAndDelete({ _id: $._id });

      if (variant == null) return null;

      if (variant.attributes != null) {
        for (_ of variant.attributes) {
          require("./attribute").Mutation.deleteAttribute(null, {
            input: {
              _id: _
            }
          });
        }
      }

      return variant;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
