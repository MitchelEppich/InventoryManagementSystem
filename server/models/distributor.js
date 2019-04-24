const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DistributorSchema = Schema({
  index: Number,
  country: String
});

module.exports = DistributorSchema;
