const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: [true, "Please provide productId"],
    },
    date: {
      type: Date,
      required: [true, "Please provide date"],
    },

    quantity: {
      type: Number,
      required: [true, "Please provide quantity"],
      default: 1,
    },
    paid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
