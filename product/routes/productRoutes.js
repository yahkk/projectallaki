const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getSingleProduct);
module.exports = router;
