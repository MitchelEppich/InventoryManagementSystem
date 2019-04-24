const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VariantSchema = Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  sotiId: String,
  sttId: String,
  name: String,
  description: [String],
  summary: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  releaseDate: { type: Date, default: new Date() },
  attributes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attribute"
    }
  ]
});

module.exports = VariantSchema;
