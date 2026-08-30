import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";
import { useState } from "react";
import ReportsModal from "./modal/ReportsModal";

export default function ReportsHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
  <>
    <PageHeader
    title={"Reports"}
    description={"Generate, analyze and export business reports."}
    actionIcon={Plus}
    actionLabel={"New Custom Reports"}
    onAction={()=> setIsOpen(true)}
    />
    {isOpen && ( <ReportsModal onClose={()=>setIsOpen(false)} />)}
  </> 
  );
}