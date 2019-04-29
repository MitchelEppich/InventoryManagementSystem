const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrainSchema = Schema({
  name: String,
  category: Number,
  breeder: String,
  origin: [Number],
  cbd: [Number],
  thc: [Number],
  cbn: [Number],
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
  variants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variant"
    }
  ],
  stock: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock"
    }
  ],
  location: [String],
  updatedAt: { type: Date, default: new Date() }
});

module.exports = StrainSchema;
