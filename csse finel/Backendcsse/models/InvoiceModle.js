const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Invoxesnmodle = new Schema({
  
     _id: {type: String, required: true},
     OrderID : {type: String, required: true},
     Price:{type: String, required: true},
     Date :{type: String, required: true},
    Items :{type: String, required: true},
   
})

const Attendance = mongoose.model("Invice",Invoxesnmodle);
module.exports = Attendance;