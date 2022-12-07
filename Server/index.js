const express = require("express")
const app = express()
const port = 4000
app.listen(port,()=>{
    console.log("server is running at port :" + port);
})

const userData = {
    name : "Sreekutty",
    age:21,
    Course:"React"
}
app.post('/add',(req,res)=>{
    // res.send(userData)
})
app.get("/getUser",(req,res)=>{
    res.send(userData)
})