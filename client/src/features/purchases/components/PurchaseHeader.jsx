import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

export default function PurchaseHeader() {
  return (
    <PageHeader
    title={"Purchase Order"}
    description={"Manage and track all your purchase orders."}
    actionIcon={Plus}
    actionLabel={"New Puchase Order"}
    
    />
  );
}