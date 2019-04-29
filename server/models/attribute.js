const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttributeSchema = Schema({
  price: Number,
  size: Number,
  stock: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock"
    }
  ],
  updatedAt: { type: Date, default: new Date() }
});

module.exports = AttributeSchema;
