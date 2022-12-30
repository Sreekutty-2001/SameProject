const express = require("express");
const { connectToMongo } = require("./Config/conn");
// const foodRoute  = require('./Routes/userRoutes');
const userRoute  = require("./Routes/userRoutes");
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 4000;
const cors =require("cors")
require("dotenv").config()



connectToMongo()
app.use(express.json())
app.listen(port, console.log(`server started at ${port}`))
// console.log(process.env.JWT_SECRET_KEY);
app.use(cookieParser())
app.use(cors())
// app.use('/',foodRoute)
app.use('/', userRoute)
app.use("/uploads",express.static("./uploads"))
//  app.get('/cookie',(req,res)=>{
//     // console.log(req.cookies);
//     res.send("hello")
//  })