import express from "express";
import ProductsModel from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";
import { getProduct, getProductById } from '../controllers/productController.js'
const router = express.Router();

router.get(
  "/",
  getProduct
);

router.get(
  "/:id",
  getProductById
);

export default router;
