const Joi = require("joi");

module.exports.courseSchema = Joi.object({
  course: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    duration: Joi.number().required().min(0),
    // image: Joi.object({
    //   filename: Joi.string(),
    //   url: Joi.string(),
    // }).optional(),
  }).required(),
});

module.exports.contactUsSchema = Joi.object({
  contact: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
  }).required(),
});
