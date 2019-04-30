const { Strain } = require("../../models");

const { strainFilters } = require("./functions");

const mongoose = require("mongoose");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const moment = require("moment");

const resolvers = {
  Strain: {
    variants(strain) {
      return require("./variant").Query.variant(null, {
        input: {
          _id: { $in: strain.variants }
        }
      });
    },
    stock(strain) {
      return require("./stock").Query.stock(null, {
        input: { _id: { $in: strain.stock } }
      });
    },
    location(strain) {
      return require("./location").Query.location(null, {
        input: { _id: { $in: strain.location } }
      });
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
      let location = [];
      for (let _ of $.location) {
        location.push(
          mongoose.Types.ObjectId(
            (await require("./location").Mutation.createLocation(null, {
              input: {
                ..._
              }
            }))._id
          )
        );
      }
      $.location = location;

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

      // Create Variant Objects
      let variants = [];
      for (_ of $.variants) {
        variants.push(
          mongoose.Types.ObjectId(
            (await require("./variant").Mutation.createVariant(null, {
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
      let $ = {
        ...input
      };

      let newLocations = [];
      if ($.location != null) {
        for (_ of $.location) {
          let id = mongoose.Types.ObjectId(
            (await require("./location").Mutation.updateLocation(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newLocations.push(id);
        }
        delete $.location;
      }

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

      // Update Variant Objects
      let newVariants = [];
      if ($.variants != null) {
        for (_ of $.variants) {
          let id = mongoose.Types.ObjectId(
            (await require("./variant").Mutation.updateVariant(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newVariants.push(id);
        }
        delete $.variants;
      }

      let strain = await Strain.findOneAndUpdate(
        {
          _id: $._id
        },
        {
          $set: {
            ...$
          },
          $push: {
            variants: newVariants,
            location: newLocations,
            stock: newStocks
          }
        },
        {
          new: true
        }
      );

      return strain;
    },
    deleteStrain: async (_, { input }) => {
      let $ = {
        ...input
      };

      if ($._id == null) return null;

      let strain = await Strain.findOneAndDelete({ _id: $._id });

      if (strain == null) return null;

      if (strain.location != null) {
        for (_ of strain.location) {
          require("./location").Mutation.deleteLocation(null, {
            input: {
              _id: _
            }
          });
        }
      }

      if (strain.variants != null) {
        for (_ of strain.variants) {
          require("./variant").Mutation.deleteVariant(null, {
            input: {
              _id: _
            }
          });
        }
      }

      if (strain.stock != null) {
        for (_ of strain.stock) {
          require("./stock").Mutation.deleteStock(null, {
            input: {
              _id: _
            }
          });
        }
      }

      return strain;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
