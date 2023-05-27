const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    cardNumber: {
      type: String,
      trim: true,
      required: [true, "Please provide product description"],
      length: [16, "Description can not be more than 400 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
