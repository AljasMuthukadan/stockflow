import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";
import { useState } from "react";
import ProductionModal from "./modal/ProductionModal";

const ProductionHeader = () => {
  const [isOpen, setIsOpen]  = useState(false)
  return (
    <>
    <PageHeader
    title={"Production"}
    description={" Manage production orders and monitor factory performance."}
    actionIcon={Plus}
    actionLabel={"New Prodution"}
    onAction={()=>setIsOpen(true)}
    />
     {isOpen && (<ProductionModal onClose={() =>setIsOpen(false)}  />)}
    </>
  )
}

export default ProductionHeader;