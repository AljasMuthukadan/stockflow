import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

const InventoryHeader = ({ onAddItem }) => {
  return (
    <PageHeader
      title="Inventory"
      description="Manage inventory items, monitor stock levels, and track product availability."
      actionIcon={Plus}
      actionLabel="Add Item"
      onAction={onAddItem}
    />
  );
};

export default InventoryHeader;