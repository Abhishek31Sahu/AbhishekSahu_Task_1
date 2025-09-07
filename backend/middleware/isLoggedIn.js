import jwt from "jsonwebtoken";

export const verifyAuthorization = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is require" });
  }
  try {
    const decode = jwt.verify(auth, "abhi123@user");
    req.user = decode;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};
import Course from "../models/course.js";

export const isCourseOwner = (req, res, next) => {
  const userId = req.user._id;
  const courseId = req.params.id;

  Course.findById(courseId)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      if (course.owner.toString() !== userId) {
        return res
          .status(403)
          .json({ message: "You don't have permission to edit this course!" });
      }

      next();
    })
    .catch((err) => {
      return res.status(500).json({ message: "Internal server error" });
    });
};
