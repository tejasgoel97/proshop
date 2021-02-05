import express from "express";
import ProductsModel from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const products = await ProductsModel.find();
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductsModel.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
