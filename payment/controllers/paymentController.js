const Payment = require("../models/Payment");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");

const submitPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  console.log(payment);
  const { data } = await axios.put("http://localhost:8081/api/orders/", {
    orderId: payment.orderId,
  });
  console.log(data);
  res.status(StatusCodes.CREATED).json({ payment });
};

const getSinglePayment = async (req, res) => {
  const { id: paymentId } = req.params;
  const payment = await Payment.findOne({ _id: paymentId });

  if (!payment) {
    throw new CustomError.NotFoundError(`No payment with id : ${paymentId}`);
  }
  res.status(StatusCodes.OK).json({ payment });
};

module.exports = {
  submitPayment,
  getSinglePayment,
};
