const mongoose = require("mongoose");

const { Schema } = mongoose;

const productModel = new Schema({
  name: { type: String },
  price: { type: String },
  quantity: { type: String },
  imgURL: { type: String },
  categoryId: { type: String },
});

module.exports = mongoose.model("Product", productModel);
