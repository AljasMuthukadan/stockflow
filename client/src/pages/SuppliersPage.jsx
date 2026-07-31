import SupplierHeader from "../components/suppliers/SupplierHeader";
import SupplierStats from "../components/suppliers/SupplierStats";
import SupplierTable from "../components/suppliers/SupplierTable";
import SupplierProfile from "../components/suppliers/SupplierProfile";

const SuppliersPage = () => {
  return (
    <div className="space-y-3  px-8 pt-2">

      <SupplierHeader />
     {/* Left Section */}
     <div className="flex flex-col gap-3 lg:flex-row">
     <div className="flex w-[75%] flex-1 flex-col  gap-3 ">
        <div className="flex flex-row">
      <SupplierStats />
      </div>
      <SupplierTable />
     </div>
    {/* Right Section */}
    <div className="flex w-[25%] flex-1 flex-col  gap-3 lg:flex-row">
    <SupplierProfile />
    </div>
    </div>
    </div>
  );
};

export default SuppliersPage;