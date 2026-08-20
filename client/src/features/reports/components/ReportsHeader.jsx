import { Plus } from "lucide-react";
import PageHeader from "../../../components/common/PageHeader";

export default function ReportsHeader() {
  return (
    <PageHeader
    title={"Reports"}
    description={"Generate, analyze and export business reports."}
    actionIcon={Plus}
    actionLabel={"New Custom Reports"}
    onAction={()=> console.log("Added Custome Reports")}
    />
  );
}