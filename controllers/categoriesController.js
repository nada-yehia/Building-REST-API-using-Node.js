function categoriesController(Category) {
  function get(req, res) {
    Category.find((err, categories) => {
      if (err) {
        return res.send(err);
      }

      return res.json(categories);
    });
  }

  return { get };
}

module.exports = categoriesController;
