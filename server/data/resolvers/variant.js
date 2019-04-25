const { Variant } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const Company = require("./company");
const Attribute = require("./attribute");

const resolvers = {
  Variant: {
    async company(variant) {
      return (await Company.Query.company(null, {
        input: { _id: variant.company }
      }))[0];
    },
    attributes(variant) {
      return Attribute.Query.attribute(null, {
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
        (await Company.Query.company(null, {
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
            (await Attribute.Mutation.createAttribute(null, {
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
    updateVariant: async (_, { input }) => {}
  },
  Subscription: {}
};

module.exports = resolvers;
