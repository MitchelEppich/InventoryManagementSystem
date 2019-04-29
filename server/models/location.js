const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = Schema({
  aisle: String,
  section: String,
  color: String,
  distributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Distributor"
  },
  updatedAt: { type: Date, default: new Date() }
});

module.exports = LocationSchema;
