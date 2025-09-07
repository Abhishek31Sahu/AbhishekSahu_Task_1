import mongoose from "mongoose";
import initData from "./data.js";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import "dotenv/config";

const mongodb_url = process.env.ATLASDB_URL;
mongoose
  .connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const initDB = async () => {
  await Admin.deleteMany();
  for (let userInfo of initData) {
    const salt = await bcrypt.genSalt(10);
    userInfo.password = await bcrypt.hash(userInfo.password, salt);
  }
  const adminInfo = initData.map((obj) => ({
    ...obj,
  }));

  await Admin.insertMany(adminInfo);
  console.log("data was initialized");
};

initDB();
