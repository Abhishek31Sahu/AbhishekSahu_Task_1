import express from "express";
const router = express.Router();
import { isLoggedIn, isCourseOwner, validateCourse } from "../middleware.js";
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
  .post(isLoggedIn, validateCourse, createCourse);

router
  .route("/:id")
  .get(getCourseById)
  .delete(isLoggedIn, isCourseOwner, deleteCourse);

router
  .route("/:id/edit")
  .put(isLoggedIn, isCourseOwner, validateCourse, updateCourse);

export default router;
