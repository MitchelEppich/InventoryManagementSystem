const { Strain } = require("../../models");

const { strainFilters } = require("./functions");

const mongoose = require("mongoose");

const Stock = require("./stock");
const Variant = require("./variant");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const moment = require("moment");

const resolvers = {
  Strain: {
    variants(strain) {
      return Variant.Query.variant(null, {
        input: {
          _id: { $in: strain.variants }
        }
      });
    },
    stock(strain) {
      return Stock.Query.stock(null, { input: { _id: { $in: strain.stock } } });
    }
  },
  Query: {
    strain: (_, { input }) => {
      return Strain.find(input);
    },
    allStrains: (_, { filter }) => {
      let query = filter ? { $or: strainFilters(filter) } : {};
      return Strain.find(query);
    }
  },
  Mutation: {
    createStrain: async (_, { input }) => {
      // Create strain data
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

      // Create Variant Objects
      let variants = [];
      for (_ of $.variants) {
        variants.push(
          mongoose.Types.ObjectId(
            (await Variant.Mutation.createVariant(null, {
              input: {
                ..._
              }
            }))._id
          )
        );
      }
      $.variants = variants;

      // Create Strain
      let strain = new Strain({
        ...$
      });

      await strain.save();

      return strain.toObject();
    },
    updateStrain: async (_, { input }) => {
      let strain = await Strain.findOne({ sotiId: input.sotiId });

      if (input.review != null) {
        if (strain.reviews == null) strain.reviews = {};
        if (strain.rating == null) strain.rating = 0;

        let [, email, , rating] = input.review.split("/&=>");
        rating = parseInt(rating);

        // Add one for rating quantity
        let ratingQuantity = [...strain.ratingQuantity];
        ratingQuantity[rating - 1] += 1;

        // Get Totals
        let total = 0;
        for (let value of ratingQuantity) {
          total += value;
        }
        let pReviews = strain.ratingQuantity[0] + strain.ratingQuantity[1] + 1;

        // Filter reviews
        let margin = 2;
        let cap = 20;
        if (rating <= margin && total >= cap && pReviews / total > 0.2) {
          let index = [...strain.reviews].reverse().findIndex(a => {
            let rating = a.split("/&=>")[3];
            if (rating <= margin) {
              ratingQuantity[rating - 1] -= 1;
              return true;
            }
          });
          strain.reviews.splice(strain.reviews.length - 1 - index, 1);
        }

        // Set rating quantity
        strain.ratingQuantity = [...ratingQuantity];

        // Set Rating
        strain.rating = (() => {
          let rating = 0;

          for (let i = 1; i <= 5; i++) {
            let _total = ratingQuantity[i - 1];
            rating += _total * i;
          }

          return (rating / (total * 5)) * 5;
        })();

        // Set Reviews
        strain.reviews = [`${input.review}/&=>${moment()}`, ...strain.reviews];
      }
      strain.save();
      return strain;
    },
    typeToDom: async (_, { input }) => {
      let _strains = await Strain.find({});

      for (let strain of _strains) {
        strain.strainImg = "/plant/cannabis-plant.png";
        // strain.strainImg = "/packages/" + strain.sotiId.toUpperCase() + ".png";

        strain.save();
      }

      return _strains;
    }
  },
  Subscription: {}
};

let randomize = arr => {
  return arr.sort((a, b) => {
    return Math.random() - 0.5;
  });
};

let getRandomStrains = async (limit, match) => {
  return await Strain.aggregate([
    {
      $sample: { size: limit }
    },
    {
      $match: match
    }
  ]);
};

module.exports = resolvers;
