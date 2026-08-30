import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";
import { useState } from "react";
import PurchaseModal from "./modal/PurchaseModal";

export default function PurchaseHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <PageHeader
    title={"Purchase Order"}
    description={"Manage and track all your purchase orders."}
    actionIcon={Plus}
    actionLabel={"New Puchase Order"}
    onAction={()=>setIsOpen(true)}
    
    />
    {isOpen && (
      <PurchaseModal onClose={()=> setIsOpen(false)} />
    )}
    </>
  );
}