import SupplierHeader from "../SupplierHeader";
import SupplierStats from "../stat-card/SupplierStats";
import SupplierTable from "../supplier-table/SupplierTable";
import SupplierProfile from "../supplier-profile/SupplierProfile";

const SuppliersPage = () => {
  return (
    <div className="min-h-full bg-gray-50 px-3 py-3 sm:px-4 md:px-5 lg:px-6">

      {/* ========================= */}
      {/* PAGE HEADER */}
      {/* ========================= */}

      <SupplierHeader />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">

        {/* ========================= */}
        {/* LEFT SECTION */}
        {/* ========================= */}

        <div className="flex min-w-0 flex-col gap-3">

          {/* Supplier Statistics */}

          <div className="min-w-0">
            <SupplierStats />
          </div>

          {/* Supplier Table */}

          <div className="min-w-0">
            <SupplierTable />
          </div>

        </div>


        {/* ========================= */}
        {/* RIGHT SECTION */}
        {/* ========================= */}

        <div className="min-w-0">

          <SupplierProfile />

        </div>

      </div>

    </div>
  );
};

export default SuppliersPage;