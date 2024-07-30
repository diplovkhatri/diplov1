const Product = require("../Models/Product");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  let productToAdd = new Product({
    product_name: req.body.product_name,
    product_prize: req.body.product_prize,
    product_description: req.body.product_description,
    category: req.body.category,
    rating: req.body.rating,
    count_in_stock: req.body.count_in_stock
  });
  productToAdd = await productToAdd.save();
  if (!productToAdd) {
    return res.status(400).json({ error: "Something Wrong" });
  }
  res.send(productToAdd);
};
// VIEW PRODUCTLISTS
exports.getallProducts = async (req, res) => {
  let products = await Product.find().populate("category", "category_name");
  if (!products) {
    return res.status(400).json({ error: "Something Wrong" });
  }
  res.send(products);
};
// PRODUCTS DETAILS
exports.getproductDetails = async (req, res) => {
  let product = await Product.findById(req.params.id).populate(
    "category",
    "category_name"
  );
  if (!product) {
    return res.status(400).json({ error: "Something Wrong" });
  }
  res.send(product);
};
// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((productToDelete) => {
      if (!productToDelete) {
        return res.status(400).json({ error: "Something Wrong" });
      }
      return res.status(200).json({ message: "Product Deleted Successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: "Something Wrong" });
    });
};
