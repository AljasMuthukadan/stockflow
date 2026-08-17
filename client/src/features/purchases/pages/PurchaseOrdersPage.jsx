import PurchaseHeader from "../PurchaseHeader";
import PurchaseStats from "../PurchaseStats";
import PurchaseFilters from "../PurchaseFilters";
import PurchaseTable from "../purchase-table/PurchaseTable";

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