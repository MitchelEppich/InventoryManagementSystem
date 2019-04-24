const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrainSchema = Schema({
  // Company Information
  company: [String],
  website: [String],
  alias: [String],
  // Seed Information
  name: String,
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
  country: [Number],
  moreInfo: [String],
  // User Information
  reviews: { type: [String], default: [] },
  // Database information
  sotiId: String,
  sttId: String,
  releaseDate: Date,
  // Inventory Information
  qtyPacked: [[Number]], // Ready to be shipped
  qtyPackedROP: [[Number]], // When amount hits this, reorder
  qtyPackedNOE: [[Number]], // Estimation to order next round
  qtyLoose: Number, // Ready to be packed
  qtyLooseROP: Number, // When amount hits this, reorder
  qtyLooseNOE: Number, // Estimation to order next round
  qtySold: [[Number]], // Sold
  location: [String], // Location in warehouse
  category: Number // Merchandise, Seed, or Catalogue
});

module.exports = StrainSchema;
