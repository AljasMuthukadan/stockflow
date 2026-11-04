import PurchaseHeader from "../components/PurchaseHeader";
import PurchaseStats from "../components/PurchaseStats";
import PurchaseFilters from "../components/PurchaseFilters";
import PurchaseTable from "../components/purchase-table/PurchaseTable";
import {purchaseOrders} from "../components/purchaseData.js"
import { useMemo, useState } from "react";
import PurchaseModal from "../components/modal/PurchaseModal.jsx";

export default function PurchaseOrdersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [po , setPo] = useState(purchaseOrders);
  const [search, setSearch] = useState("");
  const [poStatus, setPoStatus] = useState("All Status");

  const filteredProductionData = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return po.filter((purchaseOrder) => {
      const status = String(purchaseOrder.status ?? "");

      const matchesStatus =
        poStatus === "All Status" ||
        status.toLowerCase() === poStatus.toLowerCase();

      const searchableFields = [
        purchaseOrder.id,
        purchaseOrder.supplier,
        purchaseOrder.warehouse,
        purchaseOrder.date,
        purchaseOrder.items,
        purchaseOrder.amount,
        purchaseOrder.status,
        purchaseOrder.payment,
      ];

      const matchesSearch =
        normalizedSearch === "" ||
        searchableFields.some((field) =>
          String(field ?? "")
            .toLowerCase()
            .includes(normalizedSearch)
        );

      return matchesStatus && matchesSearch;
    });
  }, [po, poStatus, search]);


  return (
    <div className="space-y-3 px-3 lg:px-8  md:px-6 ">
      <PurchaseHeader setIsModalOpen={setIsModalOpen} />

      <PurchaseStats />

      <PurchaseFilters search={search} setSearch={setSearch} poStatus={poStatus} setPoStatus={setPoStatus} />

      <PurchaseTable data={filteredProductionData} />

      {isModalOpen && (
        <PurchaseModal onClose={() => setIsModalOpen(false)} setPo={setPo} />
      )}
    </div>
   
  );
}