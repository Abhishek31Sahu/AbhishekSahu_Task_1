// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }
import express from "express";
const app = express();
import mongoose from "mongoose";
// const listings = require("./router/listings.js");
import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use("/listings", listings);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
