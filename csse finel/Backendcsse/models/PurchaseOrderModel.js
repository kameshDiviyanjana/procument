const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseOrderSchema = new Schema({
  ID: { type: String, required: true },
  date: { type: String, required: true },
  empID: { type: String, required: true },
  empName: { type: String, required: true },
  orderDetails: { type: String },
  status: { type: String, default: "Pending" }, // Order status (e.g., "Pending", "Approved", etc.)
});

const PurchaseOrder = mongoose.model("PurchaseOrder", PurchaseOrderSchema);
module.exports = PurchaseOrder;
