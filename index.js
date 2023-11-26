import express from "express";
import indexRouter from "./routes/indexRouter.js"
import db from './db/config.js'
import dotenv from 'dotenv'

const app=express()
dotenv.config()

app.use(express.json());

app.use("/",indexRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server started on ${process.env.PORT}`);
})