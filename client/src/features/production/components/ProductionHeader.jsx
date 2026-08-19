import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

const ProductionHeader = () => {
  return (
    <PageHeader
    title={"Production"}
    description={" Manage production orders and monitor factory performance."}
    actionIcon={Plus}
    actionLabel={"New Prodution Order"}
    onAction={()=>console.log("Add production Clicked")}
    />
  )
}

export default ProductionHeader;