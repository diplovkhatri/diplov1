const Category = require("../Models/CategoryModel");

// ADD CATEGORY
exports.addCategory = async (req, res) => {
  let category = await Category.findOne({
    category_name: req.body.category_name
  });
  // CHECK CATEGORY EXISTS OR NOT
  if (!category) {
    // ADD CATEGORY
    let categoryToAdd = new Category({
      category_name: req.body.category_name
    });
    categoryToAdd = await categoryToAdd.save();
    if (!categoryToAdd) {
      return res.status(400).json({ error: "Something Wrong" });
    }
    res.send(categoryToAdd);
  } else {
    return res.status(400).json({ error: "category already existed" });
  }
};
// CATEGORY LIST
exports.getallCategory = async (req, res) => {
  let categories = await Category.find();
  if (!categories) {
    return res.status(400).json({ error: "Something Wrong" });
  }
  res.send(categories);
};
// GET CATEGORYDETAILS
exports.getcategoryDetails = async (req, res) => {
  let categories = await Category.findById(req.params.id);
  if (!categories) {
    return res.ststus(400).json({ error: "Something Wrong" });
  }
  res.send(categories);
};
// UPDATE CATEGORIES
exports.updateCategory = async (req, res) => {
  let categoryToUpdate = await Category.findByIdAndUpdate(
    req.params.id,
    {
      category_name: req.body.category_name
    },
    { new: true }
  );
  if (!categoryToUpdate) {
    return res.status(400).json({ error: "Something Wrong" });
  }
  res.send(categoryToUpdate);
};
// DELETE CATEGORY
exports.deleteCategory = async (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((categoryToDelete) => {
      if (!categoryToDelete) {
        return res.status(400).json({ error: "Something Wrong" });
      }
      return res.status(200).json({ message: "Category Deleted Successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: "Something Wrong" });
    });
};
