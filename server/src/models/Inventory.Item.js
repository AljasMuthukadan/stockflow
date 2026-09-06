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
      trim: true,
      uppercase: true,
      unique: true,
      sparse: true,
    },

    itemType: {
      type: String,
      required: true,
      enum: ["Raw Material", "Finished Goods","raw-material", "finished-good", "packaging"],
    },

    category: {
      type: String,
      trim: true,
      default: "",
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
      trim: true,
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

    hsnCode: {
      type: String,
      default: "",
      trim: true,
    },

    taxable: {
      type: Boolean,
      default: true,
    },

    taxRate: {
      type: Number,
      default: 18,
      min: 0,
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

    imageUrl: {
      type: String,
      default: "",
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