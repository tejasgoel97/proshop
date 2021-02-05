import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

import products from "./data/products.js";
import productRouter from "./routes/productRoute.js";
import middleWareRouter from "./middlewares/errorMiddlewares.js";

const app = express();
dotenv.config();

connectDb();

app.get("/", (req, res, next) => {
  console.log("passed basic route");
  next();
});
app.use("/api/products", productRouter);

app.use(middleWareRouter);

// app.use((req, res, next) => {
//   const error = new Error(`Not Found -${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });

// app.use((err, req, res, next) => {
//   console.log(err.message);
//   console.log(err.stack);
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack,
//   });
// });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("HIIIIIIiiii"));
