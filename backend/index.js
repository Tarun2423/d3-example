const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv").config()
const dataRoutes=require("./routes/dataroute")
const cors=require("cors")
const logger=require("morgan")
app.use(express.json())
app.use(cors())
app.use(logger("dev"))


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})


 app.use("/data",dataRoutes)




app.listen( 5002,()=>{
    console.log("Server started!!")
})