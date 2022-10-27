const express = require("express");

const categoriesController = require("../controllers/categoriesController");

function categoryRoutes(Category) {
  const categoriesRouter = express.Router();
  const categoryController = categoriesController(Category);
  categoriesRouter.route("/categories").get(categoryController.get);

  return categoriesRouter;
}

module.exports = categoryRoutes;
