import { validationResult } from "express-validator";

const validateRequest = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) next();
  else {
   return res.json({err:result.array()});
  }
};

export { validateRequest };
