const express = require("express");
const {
  addCategory,
  getallCategory,
  getcategoryDetails,
  updateCategory
} = require("../Controller/CategoryController");

const router = express.Router();

router.post("/addcategory", addCategory);
router.get("/getallcategory", getallCategory);
router.get("/getcategorydetails/:id", getcategoryDetails);
router.put("/categoryupdate/:id", updateCategory);

module.exports = router;
