// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }
import express from "express";
const app = express();
import mongoose from "mongoose";
app.use(express.json());
import listings from "./router/listings.js";
import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
mongoose
  .connect("mongodb://127.0.0.1:27017/carbon-companion", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.use("/listings", listings);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
