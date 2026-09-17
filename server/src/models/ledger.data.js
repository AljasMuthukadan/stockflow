import mongoose from "mongoose";

const ledgerSchema = new mongoose.Schema(
  {
    // =========================================
    // BASIC INFORMATION
    // =========================================

    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["Sundry Debtor", "Sundry Creditor"],
      required: true,
    },

    gstin: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },

    // =========================================
    // FINANCIAL INFORMATION
    // =========================================

    outstandingPayable: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalPurchase: {
      type: Number,
      default: 0,
      min: 0,
    },

    // =========================================
    // CONTACT INFORMATION
    // =========================================

    contactPerson: {
      type: String,
      default: "",
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    // =========================================
    // ADDRESS
    // =========================================

    buildingStreet: {
      type: String,
      default: "",
      trim: true,
    },

    landmark: {
      type: String,
      default: "",
      trim: true,
    },

    place: {
      type: String,
      default: "",
      trim: true,
    },

    pincode: {
      type: String,
      default: "",
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ledger = mongoose.model("Ledger", ledgerSchema);

export default Ledger;