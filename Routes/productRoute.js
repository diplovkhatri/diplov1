const express = require("express");
const {
  addProduct,
  getallProducts,
  getproductDetails,
  deleteProduct
} = require("../Controller/ProductController");
const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/getallproduct", getallProducts);
router.get("/getproductdetails/:id", getproductDetails);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
