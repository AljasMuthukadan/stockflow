import { useState } from "react";
import {
  X
} from "lucide-react";
import ProfileSection from "./ProfileSection";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";


export default function SupplierProfile({ledger}) {
  const [activeTab, setActiveTab] = useState("overview");
  console.log(ledger)
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
      <ProfileSection supplier={ledger} />

      {/* Tabs Header */}
      <TabHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      {/* Tab Content */}
      <TabContent supplier={ledger} setActiveTab={setActiveTab} activeTab={activeTab} />
      
    </div>
  );
}