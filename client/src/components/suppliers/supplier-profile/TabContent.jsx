import { ArrowRight, ShoppingCart } from "lucide-react";
import OverviewTab from "./tab/OverviewTab";
import ContactTab from "./tab/ContactTab";
import DocumentTab from "./tab/DocumentTab";
import NoteTab from "./tab/NoteTab";

const TabContent = ({ activeTab, supplier }) => {
  return (
    <div className="p-5">

        {/* ========================= */}
        {/* OVERVIEW TAB */}
        {/* ========================= */}

        {activeTab === "overview" && (
          <OverviewTab supplier={supplier} />
        )}

        {/* ====================== */}
        {/* CONTACT TAB */}
        {/* ====================== */}

        {activeTab === "contact" && (
         <ContactTab supplier={supplier} />
        )}

        {/* ====================== */}
        {/* DOCUMENTS TAB */}
        {/* ====================== */}

        {activeTab === "documents" && (
          <DocumentTab supplier={supplier} />
        )}

        {/* ====================== */}
        {/* NOTES TAB */}
        {/* ====================== */}

        {activeTab === "notes" && (
           <NoteTab supplier={supplier} />
        )}

        {/* Bottom Buttons */}
        <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-4">

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700">
            View Full Profile
            <ArrowRight size={16} />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            <ShoppingCart size={16} />
            New Purchase Order
          </button>

        </div>

      </div>
  )
}

export default TabContent