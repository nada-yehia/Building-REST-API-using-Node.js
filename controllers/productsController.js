function productsController(Product) {
  function post(req, res) {
    const product = new Product(req.body);

    product.save();
    return res.status(201).json(product);
  }

  function get(req, res) {
    const query = {};
    if (req.query.categoryId) {
      query.categoryId = req.query.categoryId;
    }
    Product.find(query, (err, products) => {
      if (err) {
        return res.send(err);
      }
      return res.json(products);
    });
  }

  return { post, get };
}

module.exports = productsController;
