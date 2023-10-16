const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InvoiceModel = new Schema({
  
    InvoiceID: {type: String, required: true},
    EmpName: {type: String, required: true},
    OrderID : {type: String, required: true},
    Date : {type: String, required: true},
    Price:{type: Number, required: true},
    Items :{type: String, required: true},
    Email: {
        type: String,
        required: true,
        match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
      },
      
   
})

const Invoice = mongoose.model("Invoice",InvoiceModel);
module.exports = Invoice;