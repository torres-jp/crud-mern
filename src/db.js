import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pnauj:arigat00_@cluster0.xzfrpiy.mongodb.net/"
    );
    console.log(">>> DB is Connected");
  } catch (error) {
    console.log;
  }
};
