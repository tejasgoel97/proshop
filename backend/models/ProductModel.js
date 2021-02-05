import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, requred: true },
    rating: { type: Number, requred: true },
    comment: { type: String, requred: true },
  },
  {
    timeStamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
      default: 0,
    },
    numReviews: {
      type: String,
      default: 0,
    },
    reviews: reviewSchema,
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

export default Product;
