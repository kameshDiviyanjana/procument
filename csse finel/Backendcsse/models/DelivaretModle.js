const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Delivery = new Schema({
  
     ID: {type: String, required: true},
    name : {type: String, required: true},
    mail:{type: String, required: true},
    tele :{type: String, required: true},
    address :{type: String, required: true},
    day :{type: String, required: true},
    msg :{type: String, required: true}
})

const Attendance = mongoose.model("Delivery",Delivery);
module.exports = Attendance;