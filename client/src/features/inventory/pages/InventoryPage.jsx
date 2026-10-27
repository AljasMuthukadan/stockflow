import { useMemo, useState } from "react";
import { AlertCircle, PackageSearch } from "lucide-react";

import InventoryStats from "../components/card/InventoryStats";
import InventoryFilters from "../components/filter/InventoryFilters";
import InventoryTable from "../components/table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import useInventory from "../../../hooks/useInventory";
import Loading from "../../../components/ui/Loading";

// =========================================================
// STOCK STATUS HELPER
// =========================================================

const getStockStatus = (quantity, reorderLevel) => {
  const stock = Number(quantity ?? 0);
  const reorder = Number(reorderLevel ?? 0);

  if (stock <= 0) {
    return "Out of Stock";
  }

  if (stock <= reorder) {
    return "Low Stock";
  }

  return "In Stock";
};

// =========================================================
// STATISTICS LOADING SKELETON
// =========================================================

const InventoryStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="min-h-[145px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />

            <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-100" />
          </div>

          <div className="mt-6 h-8 w-24 animate-pulse rounded bg-slate-200" />

          <div className="mt-3 h-3 w-36 max-w-full animate-pulse rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
};

// =========================================================
// INVENTORY PAGE
// =========================================================

const InventoryPage = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // =======================================================
  // INVENTORY DATA
  // =======================================================

  const {
    inventory = [],
    loading,
    error,
    addInventoryItem,
    updateInventoryItemById,
    deleteInventoryItem,
  } = useInventory();

  const inventoryItems = Array.isArray(inventory) ? inventory : [];

  // =======================================================
  // FILTER STATE
  // =======================================================

  const [category, setCategory] = useState("All Categories");
  const [stockWise, setStockWise] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");

  // =======================================================
  // FILTER INVENTORY
  // =======================================================

  const filteredInventory = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return inventoryItems.filter((item) => {
      const itemCategory = item.itemType ?? item.category ?? "";

      const matchesCategory =
        category === "All Categories" ||
        itemCategory === category;

      const status = getStockStatus(
        item.quantity,
        item.reorderLevel
      );

      const matchesStock =
        stockWise === "All Status" ||
        status === stockWise;

      const searchableFields = [
        item.name,
        item.sku,
        itemCategory,
        item._id,
      ];

      const matchesSearch =
        normalizedSearch === "" ||
        searchableFields.some((field) =>
          String(field ?? "")
            .toLowerCase()
            .includes(normalizedSearch)
        );

      return matchesCategory && matchesStock && matchesSearch;
    });
  }, [inventoryItems, category, stockWise, searchQuery]);

  // =======================================================
  // MODAL HANDLERS
  // =======================================================

  const handleOpenAddModal = () => {
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // =======================================================
  // RESET FILTERS
  // =======================================================

  const handleResetFilters = () => {
    setCategory("All Categories");
    setStockWise("All Status");
    setSearchQuery("");
  };

  // =======================================================
  // UI
  // =======================================================

  return (
    <main className="mx-auto min-h-full w-full max-w-[1800px] space-y-5 px-3 py-4 sm:space-y-6 sm:px-5 lg:px-6 xl:px-8">

      {/* ================================================ */}
      {/* PAGE HEADER */}
      {/* ================================================ */}

      <section className="min-w-0">
        <InventoryHeader onAddItem={handleOpenAddModal} />
      </section>

      {/* ================================================ */}
      {/* ERROR MESSAGE */}
      {/* ================================================ */}

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle
            size={20}
            className="mt-0.5 shrink-0"
          />

          <div className="min-w-0">
            <p className="font-semibold">
              Unable to load inventory
            </p>

            <p className="mt-1 break-words">
              {typeof error === "string"
                ? error
                : error.message ||
                  "Something went wrong. Please try again."}
            </p>
          </div>
        </div>
      )}

      {/* ================================================ */}
      {/* INVENTORY STATISTICS */}
      {/* ================================================ */}

      <section className="min-w-0">
        {loading ? (
          <InventoryStatsSkeleton />
        ) : (
          <InventoryStats inventory={inventoryItems} />
        )}
      </section>

      {/* ================================================ */}
      {/* FILTERS */}
      {/* ================================================ */}

      <section className="min-w-0">
        <InventoryFilters
          category={category}
          setCategory={setCategory}
          stockWise={stockWise}
          setStockWise={setStockWise}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </section>

      {/* ================================================ */}
      {/* INVENTORY TABLE SECTION */}
      {/* ================================================ */}

      <section className="min-w-0 space-y-4">

        {/* Table Header */}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              Inventory Items
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {loading
                ? "Fetching inventory records..."
                : `Showing ${filteredInventory.length} of ${inventoryItems.length} items`}
            </p>
          </div>

          {!loading && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="self-start rounded-lg px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 sm:self-auto"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ============================================== */}
        {/* TABLE / LOADING / EMPTY SEARCH RESULTS */}
        {/* ============================================== */}

        {loading ? (

          /* Loading State */

          <div className="flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Loading message="Loading inventory items..." />
          </div>

        ) : inventoryItems.length > 0 &&
          filteredInventory.length === 0 ? (

          /* No Matching Results */

          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <PackageSearch size={27} strokeWidth={1.7} />
            </div>

            <h3 className="text-base font-semibold text-slate-800">
              No matching inventory items
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              We couldn't find any items matching your search or selected filters.
              Try changing your search term or clearing the filters.
            </p>

            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Clear filters
            </button>
          </div>

        ) : (

          /* Inventory Table */

          <div className="min-w-0">
            <InventoryTable
              inventory={filteredInventory}
              loading={false}
              onEditItem={handleEditItem}
              onDeleteItem={deleteInventoryItem}
            />
          </div>
        )}
      </section>

      {/* ================================================ */}
      {/* ADD / EDIT MODAL */}
      {/* ================================================ */}

      {isModalOpen && (
        <InventoryModal
          key={selectedItem?._id ?? "new"}
          item={selectedItem}
          onClose={handleCloseModal}
          onAddItem={addInventoryItem}
          onUpdateItem={updateInventoryItemById}
        />
      )}
    </main>
  );
};

export default InventoryPage;