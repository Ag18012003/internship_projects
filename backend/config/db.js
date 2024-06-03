import mongoose from "mongoose"
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://amanguptaag009988:fmA0mAEHw8dSL8dd@cluster0.wzuropd.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}