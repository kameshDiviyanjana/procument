const express = require("express");
const router = express.Router();
const ManagerController = require("../controlle/ManagerController");

// Get all purchase orders
router.get("/purchase-orders", ManagerController.getAllPurchaseOrders);

// Approve a specific purchase order by ID
router.put(
  "/approve-purchase-order/:id",
  ManagerController.approvePurchaseOrder
);

module.exports = router;
