const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    throw new CustomError.NotFoundError("Failed to retrieve orders.");
  }
  res.status(StatusCodes.OK).json({ products });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const createProduct = (req, res) => {
  const { name, price, description, image } = req.body;
  const newProduct = new Product({ name, price, description, image });
  newProduct
    .save()
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
};
