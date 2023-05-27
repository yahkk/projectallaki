const express = require("express");
const router = express.Router();

const {
  submitPayment,
  getSinglePayment,
} = require("../controllers/paymentController");

router.route("/").post(submitPayment);
router.route("/:id").get(getSinglePayment);
module.exports = router;
