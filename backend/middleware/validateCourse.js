import { courseSchema, contactUsSchema } from "../schema.js";

export function validateCourse(req, res, next) {
  const { error } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}

export function validateContactUs(req, res, next) {
  const { error } = contactUsSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}
