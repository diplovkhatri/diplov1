const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true
    },
    product_prize: {
      type: Number,
      required: true
    },
    product_description: {
      type: String,
      required: true
    },
    // product_image: {
    //   type: String,
    //   required: true
    // },
    category: {
      type: String,
      // ref: "category",
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    count_in_stock: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
