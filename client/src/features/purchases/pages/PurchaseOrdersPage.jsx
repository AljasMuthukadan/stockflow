import PurchaseHeader from "../components/PurchaseHeader";
import PurchaseStats from "../components/PurchaseStats";
import PurchaseFilters from "../components/PurchaseFilters";
import PurchaseTable from "../components/purchase-table/PurchaseTable";

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