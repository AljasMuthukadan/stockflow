import mongoose from "mongoose";

const LedgerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["Sundry Debtor", "Sundry Creditor"],
    required: true,
  },
  GSTIN: {
    type: String,
    default: "",
  },
  outstandingPayable: {
    type: Number,
    default: 0,
  },
  totalOrders: {
    type: Number,
    default: 0,
  },
  totalPurchase: {
    type: Number,
    default: 0,
  },
  contactPerson: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  buildingStreet: {
    type: String,
    default: "",
  },
  landMark: {
    type: String,
    default: "",
  },
  place : {
    type : String,
        default : ""
  },
  pincode: {
    type : Number,
    default:""
  },
  state:{
    type :String,
    required : true,

  },

});
const Ledger = mongoose.model("Ledger", LedgerSchema);
export default Ledger;