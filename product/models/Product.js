const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please provide product description"],
      maxlength: [400, "Description can not be more than 400 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
