import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

const LedgerHeader = ({onAddItem}) => {

  return (
    <>
     <PageHeader
     title={"Ledgers"}
     actionIcon={Plus}
     actionLabel={"Add Ledger"}
     description={"Manage Ledgers, sundry creditors and debtors."}
     onAction={onAddItem}
     />


    </>
  );
};

export default LedgerHeader;