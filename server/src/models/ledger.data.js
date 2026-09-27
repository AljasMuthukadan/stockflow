import mongoose from "mongoose";

const ledgerSchema = new mongoose.Schema(
  {
    // =========================================
    // BASIC INFORMATION
    // =========================================

    company: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    partyType: {
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

    orders: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalPurchase: {
      type: Number,
      default: 0,
      min: 0,
    },
    image : {
      type : String,
      default:""
    },

    // =========================================
    // CONTACT INFORMATION
    // =========================================

    contactInfo: {
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

      line1: {
        type: String,
        default: "",
        trim: true,
      },

      line2: {
        type : String,
        default : "",
        trim: true
      },

      city: {
        type: String,
        default: "",
        trim: true,
      },

      pinCode: {
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
      address : {
        type : String,
        default : "",
      }
    },
  },
  {
    timestamps: true,
  }
);

const Ledger = mongoose.model("Ledger", ledgerSchema);

export default Ledger;

