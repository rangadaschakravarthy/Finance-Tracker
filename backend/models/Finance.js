const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Finance", financeSchema);
