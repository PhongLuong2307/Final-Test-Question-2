const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const inventorySchema = new Schema({
  _id: {
    type: String,
    require: true
  },
  sku: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  instock: {
    type: Number,
    require: true,
    default: 0
  },
});

const inventoryModel = mongoose.model("inventories", inventorySchema);
module.exports = inventoryModel;
