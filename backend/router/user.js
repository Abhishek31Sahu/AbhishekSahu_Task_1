import { signIn, signUp } from "../controllers/authController.js";
import {
  signupValidation,
  loginValidation,
} from "../middleware/authValidation.js";
import express from "express";
const router = express.Router();

router.route("/login").post(loginValidation, signIn);

router.route("/signup").post(signupValidation, signUp);

export default router;
