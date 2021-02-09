import mongoose from "mongoose";
import chalk from "chalk";

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, () => console.log("LLLLl"));

    console.log("CONNECTED>>>>");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
