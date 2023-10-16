const PurchaseOrder = require("../models/PurchaseOrderModel"); // Assuming you have a PurchaseOrder model

// Get all purchase orders
const getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find();
    res.json(purchaseOrders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching purchase orders" });
  }
};

// Approve a purchase order by ID
const approvePurchaseOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      orderId,
      { status: "Approved" },
      { new: true }
    );

    if (!purchaseOrder) {
      return res.status(404).json({ error: "Purchase order not found" });
    }

    res.json(purchaseOrder);
  } catch (error) {
    res.status(500).json({ error: "Error approving purchase order" });
  }
};

module.exports = {
  getAllPurchaseOrders,
  approvePurchaseOrder,
};
