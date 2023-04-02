const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema({
  _id: {
    type: String,
    require: true
  },
  item: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  quantity: {
    type: Number,
    require: true,
    default: 0
  },
});

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
