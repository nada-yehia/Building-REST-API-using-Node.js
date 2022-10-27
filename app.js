const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = mongoose.connect("mongodb://localhost/APIs");
const port = process.env.PORT || 3000;
//const productsRouter = express.Router();
//const categoriesRouter = express.Router();

const Product = require("./models/productModel");
const Category = require("./models/categoryModel");

const productsRouter = require("./routes/productRouter")(Product);
const categoriesRouter = require("./routes/categoryRouter")(Category);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json());

app.use("/api", productsRouter);
app.use("/api", categoriesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to nodemon2 API!");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
