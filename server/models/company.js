const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = Schema({
  assetsUrl: String,
  website: [String],
  phone: [String],
  socials: [String],
  email: String,
  name: String
});

module.exports = CompanySchema;
