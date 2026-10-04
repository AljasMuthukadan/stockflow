import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

const ProductionHeader = ({ handleOpenModal }) => {
  return (
    <>
    <PageHeader
    title={"Production"}
    description={" Manage production orders and monitor factory performance."}
    actionIcon={Plus}
    actionLabel={"New Prodution"}
    onAction={handleOpenModal}
    />
    </>
  )
}

export default ProductionHeader;