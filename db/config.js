import mongoose from "mongoose";
export default (()=>{
    mongoose
    .connect("mongodb+srv://pranavkpz12345:sCLZ6fzeAnWqPHy7@classy.w2cl37s.mongodb.net/github-actions")
    .then(() => console.log("db connected successfully"))
    .catch((err)=>console.log({error:err}))
})()
