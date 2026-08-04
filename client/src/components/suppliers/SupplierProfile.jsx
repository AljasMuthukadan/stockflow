import { useState } from "react";
import {
  X
} from "lucide-react";
import ProfileSection from "./supplier-profile/ProfileSection";
import TabHeader from "./supplier-profile/TabHeader";
import TabContent from "./supplier-profile/TabContent";

const supplier = {
  company: "ABC Foods Pvt Ltd",
  avatar: "AF",

  partyType: "Sundry Creditor",

  gst: "27ABCDE1234F1Z5",

  categories: [
    "Sugar",
    "Milk Powder",
    "Cocoa Powder",
  ],

  outstanding: "₹85,400",

  outstandingType: "Payable",

  totalOrders: 42,

  totalPurchase: "₹5,85,200",

  contact: {
    name: "John Mathew",
    designation: "Manager – Sales",
    phone: "+91 98765 43210",
    email: "contact@abcfoods.com",
  },

  address: {
    company: "ABC Foods Pvt Ltd",
    address:
      "No. 12, Industrial Estate, Kaloor,\nErnakulam, Kerala - 682017, India",
  },

  documents: [
    {
      name: "GST Certificate.pdf",
      size: "2.4 MB",
    },
    {
      name: "PAN Card.pdf",
      size: "980 KB",
    },
    {
      name: "Supplier Agreement.pdf",
      size: "1.8 MB",
    },
  ],

  notes:
    "Reliable supplier with consistent delivery performance. Payment terms are Net 30 days. Preferred vendor for sugar and milk powder procurement.",
};

export default function SupplierProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "contact",
      label: "Contact & Address",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];

  return (
    <div className="w-full overflow-hidden mb-3 rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-2.5">
        <h2 className="text-sm font-semibold text-slate-800">
          Supplier Details
        </h2>

        <button className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100">
          <X size={17} />
        </button>
      </div>

      {/* Supplier Information */}
      <ProfileSection supplier={supplier} />

      {/* Tabs Header */}
      <TabHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      {/* Tab Content */}
      <TabContent supplier={supplier} setActiveTab={setActiveTab} activeTab={activeTab} />
      
    </div>
  );
}