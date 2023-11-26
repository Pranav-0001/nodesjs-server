import { body } from "express-validator";

export const ValidationSchema = [

  body("name").notEmpty().withMessage("name is missing"),
  body("age").notEmpty().withMessage("age is missing"),
  body("place").notEmpty().withMessage("place is missing"),
  body("email").notEmpty().withMessage("email is missing"),
//   body("org").notEmpty(),
];