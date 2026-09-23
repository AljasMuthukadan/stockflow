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

    supplyCategory: {
      type: [String],
      default: [],
    },

    // =========================================
    // FINANCIAL INFORMATION
    // =========================================

    outstanding: {
      type: Number,
      default: 0,
      min: 0,
    },

    outstandingType: {
      type: String,
      enum: ["Payable", "Receivable", "Settled"],
      default: "Settled",
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

    contact: {
      personName: {
        type: String,
        default: "",
        trim: true,
      },

      phoneNo: {
        type: String,
        default: "",
        trim: true,
      },

      designation: {
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
    },

    // =========================================
    // ADDRESS
    // =========================================

    address: {
      company: {
        type: String,
        default: "",
        trim: true,
      },

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
        default: "",
        trim: true,
      },

      country: {
        type: String,
        default: "India",
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Ledger = mongoose.model("Ledger", ledgerSchema);

export default Ledger;