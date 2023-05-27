const Order = require("../models/Order");

const { StatusCodes } = require("http-status-codes");

const createOrder = async (req, res) => {
  const order = await Order.create(req.body);

  res.status(StatusCodes.CREATED).json({ order });
};

const updateOrderToPaid = async (req, res) => {
  const order = await Order.findOne({
    _id: req.body.orderId,
  });

  order.paid = true;

  await order.save();

  return res.json({ order });
};

module.exports = {
  createOrder,
  updateOrderToPaid,
};
