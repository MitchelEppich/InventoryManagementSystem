const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrainSchema = Schema({
  company: [String],
  website: [String],
  name: String,
  alias: [String],
  price: [[Number]],
  description: String,
  effect: [Number],
  yield: [Number],
  genetic: Number,
  flowerTime: [Number],
  difficulty: Number,
  indica: Number,
  sativa: Number,
  ruderalis: Number,
  type: Number,
  environment: Number,
  relations: [String],
  pThc: [Number],
  pCbd: [Number],
  pCbn: [Number],
  sotiId: String,
  country: [Number],
  sttId: String,
  releaseDate: Date,
  isFeatured: Boolean,
  seed: String,
  seedFrom: { type: Date, default: new Date() }
});

module.exports = StrainSchema;
