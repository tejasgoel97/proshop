import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "../config/db.js";
import products from "./products.js";
import users from "./users.js";
import User from "../models/UserModel.js";
import Product from "../models/ProductModel.js";
import Order from "../models/OrderModel.js";
import chalk from "chalk";

dotenv.config();

connectDb();
const importData = async () => {
  try {
    // await Order.deleteMany();
    await User.deleteMany();

    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log("USer INSERTED");
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });
    const createdProducts = await Product.insertMany(sampleProducts);

    console.log(chalk.bgGreen("INSERTED SUCCESFULY"));
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    console.log(chalk.bgRed("Destroyed SUCCESFULY"));

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log(process.argv[2]);
  importData();
}
