import express from "express";
const router = express.Router();
import { validateContactUs } from "../middleware/validateCourse.js";
import { verifyAuthorization } from "../middleware/isLoggedIn.js";
import { createContactUs, getContactUs } from "../controllers/contact.js";

router.route("/").post(validateContactUs, createContactUs);
router.route("/admin/requests").get(verifyAuthorization, getContactUs);
export default router;
