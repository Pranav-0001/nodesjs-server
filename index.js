import express from "express";
import indexRouter from "./routes/indexRouter.js"
import db from './db/config.js'

const app=express()

app.use(express.json());

app.use("/",indexRouter)

app.listen(3000,()=>{
    console.log("Server started");
})