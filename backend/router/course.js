import express from "express";
const router = express.Router();
import {
  verifyAuthorization,
  isCourseOwner,
} from "../middleware/isLoggedIn.js";
import { validateCourse } from "../middleware/validateCourse.js";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.js";

router
  .route("/")
  .get(getCourses)
  .post(verifyAuthorization, validateCourse, createCourse);

router
  .route("/:id")
  .get(getCourseById)
  .delete(verifyAuthorization, isCourseOwner, deleteCourse);

router
  .route("/:id/edit")
  .put(verifyAuthorization, isCourseOwner, validateCourse, updateCourse);

export default router;
