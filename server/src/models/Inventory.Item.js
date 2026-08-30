import mongoose from "mongoose";

const inventoryItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    sku: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },

    itemType: {
      type: String,
      required: true,
      enum: ["Raw Material", "Finished Goods"],
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    unit: {
      type: String,
      required: true,
    },

    reorderLevel: {
      type: Number,
      default: 0,
      min: 0,
    },

    purchasePrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    sellingPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    taxable: {
      type: Boolean,
      default: true,
    },

    taxRate: {
      type: Number,
      default: 18,
    },

    supplier: {
      type: String,
      default: "",
    },

    supplierSku: {
      type: String,
      default: "",
    },

    warehouse: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const InventoryItem = mongoose.model(
  "InventoryItem",
  inventoryItemSchema
);

export default InventoryItem;