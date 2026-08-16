import PurchaseHeader from "../components/purchases/PurchaseHeader";
import PurchaseStats from "../components/purchases/PurchaseStats";
import PurchaseFilters from "../components/purchases/PurchaseFilters";
import PurchaseTable from "../components/purchases/purchase-table/PurchaseTable";

export default function PurchaseOrdersPage() {
  return (
    <div className="space-y-3 px-3 lg:px-8  md:px-6 ">
      <PurchaseHeader />

      <PurchaseStats />

      <PurchaseFilters />

      <PurchaseTable />
    </div>
  );
}