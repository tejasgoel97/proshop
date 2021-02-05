import mongoose from "mongoose";
import chalk from "chalk";

const connectDb = async () => {
  try {
    console.log(chalk.green.inverse(process.env.MONGO_URI));
    const response = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(chalk.greenBright("CONNECTED>>>>"));
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
