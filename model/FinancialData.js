const mongoose = require("mongoose");

const financialDataSchema = new mongoose.Schema({
  income: Number,
  expenses: Number,
  debts: Number,
  assets: Number,
  score: Number,
});

const FinancialData = mongoose.model("FinancialData", financialDataSchema);

module.exports = FinancialData;
