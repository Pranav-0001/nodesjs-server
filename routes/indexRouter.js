import express from "express";
import { ValidationSchema } from "../validation/validationSchema.js";
import { validateRequest } from "../requestValidation/reqValidation.js";
import { matchedData } from "express-validator";
import userModel from "../models/userModel.js";
const router = express.Router();

router.post("/", ValidationSchema, validateRequest, async (req, res) => {
  try {
    const requestData = matchedData(req);
    console.log(requestData);
    const user = new userModel({
      ...requestData,
    });
    const result = await user.save();
    res.json({ status: true, result });
  } catch (error) {
    if (error.code === 11000 || error.code === 11001) {
        res.status(400).json({ error: 'Email must be unique.' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }
});

router.get("/",(req,res)=>{

  res.json({status:"response after a push"})
})

export default router;
