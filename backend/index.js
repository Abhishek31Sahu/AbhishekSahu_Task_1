import express from "express";
const app = express();
import "dotenv/config";
import mongoose from "mongoose";
app.use(express.json());
import courses from "./router/course.js";
import user from "./router/user.js";
import contact from "./router/contact.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




app.use(
  cors({})
);
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
app.disable("etag");
app.use("/api/courses", courses);
app.use("/api", user);
app.use("/api/contact", contact);
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
