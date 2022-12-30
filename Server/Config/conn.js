const mongoose = require("mongoose")
const db = "mongodb://localhost:27017"
exports.connectToMongo =()=>{
    mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }).then(()=>{
        console.log("Connected to db sucessfully");
    }).catch((err)=>{
        console.log("Connection failed");
    })
}