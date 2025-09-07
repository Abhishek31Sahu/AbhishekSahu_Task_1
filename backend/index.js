import express from "express";
const app = express();
import "dotenv/config";
import mongoose from "mongoose";
app.use(express.json());
import courses from "./router/course.js";
import user from "./router/user.js";
import contact from "./router/contact.js";
import cors from "cors";
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
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

app.use("/api/courses", courses);
app.use("/api", user);
app.use("/api/contact", contact);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
