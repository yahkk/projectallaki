const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrderToPaid,
} = require("../controllers/orderController");

router.route("/").post(createOrder).put(updateOrderToPaid);

module.exports = router;
