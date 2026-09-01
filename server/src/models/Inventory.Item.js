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
      required: false,
      default : function() {
        // Generate a SKU based on the name and a random number
        const randomNum = Math.floor(Math.random() * 10000);
        return `${this.name.replace(/\s+/g, '-').toUpperCase()}-${randomNum}`;
      },
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
      required: false,
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
    hsnCode: {
      type: String,
      default: "",
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