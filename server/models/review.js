const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = Schema({
  name: String,
  body: String,
  email: String,
  rating: Number,
  approved: Boolean,
  createdAt: { type: Date, default: new Date() }
});

module.exports = ReviewSchema;
