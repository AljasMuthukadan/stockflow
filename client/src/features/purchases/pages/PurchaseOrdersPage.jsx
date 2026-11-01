import PurchaseHeader from "../components/PurchaseHeader";
import PurchaseStats from "../components/PurchaseStats";
import PurchaseFilters from "../components/PurchaseFilters";
import PurchaseTable from "../components/purchase-table/PurchaseTable";
import {purchaseOrders} from "../components/purchaseData.js"
import { useState } from "react";
import PurchaseModal from "../components/modal/PurchaseModal.jsx";

export default function PurchaseOrdersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [po , setPo] = useState(purchaseOrders)
  return (
    <div className="space-y-3 px-3 lg:px-8  md:px-6 ">
      <PurchaseHeader setIsModalOpen={setIsModalOpen} />

      <PurchaseStats />

      <PurchaseFilters />

      <PurchaseTable data={po} />

      {isModalOpen && (
        <PurchaseModal onClose={() => setIsModalOpen(false)} setPo={setPo} />
      )}
    </div>
   
  );
}