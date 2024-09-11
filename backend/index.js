const express= require("express");
const mongoose= require ("mongoose");
const dotenv= require ("dotenv");
const connectDb = require("./database");
const app = express();
dotenv.config();
// mongoose.connect('mongodb+srv://syedmaazashraf7:<syedmaazashraf7>@cluster0.nrp37.mongodb.net/')

// const userSchema = new mongoose.Schema(

//     {
//         firstName:{
//             type:String,
//             required:true,
//         },
//         lastName: {
//             type:String,

//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true,
//         },
//     }
// )
// const User= mongoose.model("user","userSchema");
app.get(
    "/",
    (req,res)=>(
        res.send("hello")
    )
)
app.listen(
    5000,
    ()=>console.log("backend is running")
)