import mongoose from "mongoose";
import {config} from 'dotenv'
config()
export default (()=>{
    mongoose
    .connect(`${process.env.MONGO_URL}`)
    .then(() => console.log(`db connected successfully `))
    .catch((err)=>console.log({error:err}))
})()
