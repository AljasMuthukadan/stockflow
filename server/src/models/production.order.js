
import mongoose from "mongoose";

const ProductionOrderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InventoryItem",
    required: true,
  },
  productionId : {
    type : String,
  },

  stock: {
    type: String,
    required: true,
  },

  batch: {
    type: String,
  },

  quantity: {
    type: Number,
    required: true,
  },

  expectedDate: {
    type: Date,
  },

  productionDate: {
    type: Date,
  },

  unit: {
    type: String,
  },

  warehouse: {
    type: String,
  },

  notes: {
    type: String,
  },

  bom: {
    type: String,
  },

  supervisor: {
    type: String,
    default: "Not Assigned",
  },

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Delayed", "Cancelled"],
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductionOrder = mongoose.model("ProductionOrder", ProductionOrderSchema);

export default ProductionOrder;

