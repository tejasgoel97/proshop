import asyncHandler from 'express-async-handler'
import ProductsModel from '../models/ProductModel.js'

export const getProduct =
    asyncHandler(async (req, res, next) => {
        console.log("IN THE GET PRODUCTS ROUTER")
        const products = await ProductsModel.find();
        console.log("passed the product")
        res.json(products);
    })



export const getProductById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductsModel.findById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product Not Found");
    }
})

