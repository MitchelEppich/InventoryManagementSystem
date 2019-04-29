const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StockSchema = Schema({
  amount: Number,
  rop: Number,
  noe: Number,
  sold: Number,
  updatedAt: { type: Date, default: new Date() }
});

module.exports = StockSchema;
