const { Location } = require("../../models");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const mongoose = require("mongoose");

const resolvers = {
  Location: {
    async distributor(location) {
      return (await require("./distributor").Query.distributor(null, {
        input: { _id: location.distributor }
      }))[0];
    }
  },
  Query: {
    location: (_, { input }) => {
      let $ = { ...input };
      let { limit, skip, cursor } = $;
      ["limit", "skip", "cursor"].map(_ => delete $[_]);
      return Location.find($)
        .limit(limit)
        .skip(skip || cursor);
    },
    allLocations: _ => {
      return Location.find({});
    }
  },
  Mutation: {
    createLocation: async (_, { input }) => {
      let $ = {
        ...input
      };

      let location = new Location({
        ...$
      });

      await location.save();

      return location.toObject();
    },
    updateLocation: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let location = await Location.findOneAndUpdate(
        { _id: $._id },
        {
          $set: { ...$ }
        },
        { new: true, upsert: true }
      );

      return location;
    },
    deleteLocation: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) return null;

      let location = await Location.findOneAndDelete({ _id: $._id });

      return location;
    }
  },
  Subscription: {}
};

module.exports = resolvers;
