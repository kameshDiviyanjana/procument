const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpAttendanceSchema = new Schema({
    ID: {type: String, required: true},
    date: {type: String, required: true},
    empID: {type: String, required: true},
    empName: {type: String, required: true},
    orderDetails: {type: String},
    yes : {type: String}
    

})

const Attendance = mongoose.model("Purchase",EmpAttendanceSchema);
module.exports = Attendance;