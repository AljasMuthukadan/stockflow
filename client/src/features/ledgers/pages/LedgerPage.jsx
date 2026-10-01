import { useState } from "react";

import LedgerHeader from "../components/LedgerHeader";
import LedgerStats from "../components/card/LedgerStats";
import LedgerTable from "../components/table/LedgerTable";
import LedgerProfile from "../components/profile/LedgerProfile";
import LedgerModal from "../components/modal/LedgerModal";
import useLedger from "../hooks/useLedger";

const LedgerLoading = () => {
  return (
    <div className="flex h-full items-center justify-center rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-emerald-500" />
        Loading ledgers...
      </div>
    </div>
  );
};

const LedgerError = ({ error, onRetry }) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Failed to load ledgers.";

  return (
    <div className="flex h-full items-center justify-center rounded-2xl border border-red-200 bg-white">
      <div className="text-center">
        <p className="text-sm font-medium text-red-600">
          {message}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="
            mt-3
            rounded-lg
            bg-emerald-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-emerald-700
          "
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const LedgerPage = () => {
  const {
    addLedger,
    ledger,
    loading,
    error,
    fetchLedgers,
    updateLedger,
  } = useLedger();

  // null = Add mode
  // object = Edit mode
  const [selectLedger, setSelectLedger] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectProfile, setSelectProfile] = useState(null);

  // =========================================================
  // OPEN ADD MODAL
  // =========================================================

  const handleOpenAddModal = () => {
    setSelectLedger(null);
    setIsModalOpen(true);
  };

  // =========================================================
  // OPEN EDIT MODAL
  // =========================================================

  const handleEditLedger = (ledger) => {
    console.log("Editing ledger:", ledger);

    setSelectLedger(ledger);
    setIsModalOpen(true);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectLedger(null);
  };

  return (
    <div
      className="
        flex
        h-[calc(100vh-64px)]
        min-h-0
        flex-col
        overflow-hidden
        bg-gray-50
        px-3
        py-3
        sm:px-4
        md:px-5
        lg:px-6
      "
    >
      {/* PAGE HEADER */}

      <div className="shrink-0">
        <LedgerHeader
          onAddItem={handleOpenAddModal}
        />
      </div>

      {/* MAIN CONTENT */}

      <div
        className="
          mt-3
          grid
          min-h-0
          flex-1
          grid-cols-1
          gap-3
          overflow-hidden
          xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]
        "
      >
        {/* LEFT SECTION */}

        <div
          className="
            flex
            min-h-0
            min-w-0
            flex-col
            gap-3
          "
        >
          {/* LOADING */}

          {loading ? (
            <div className="min-h-0 flex-1">
              <LedgerLoading />
            </div>
          ) : error ? (
            /* ERROR */

            <div className="min-h-0 flex-1">
              <LedgerError
                error={error}
                onRetry={fetchLedgers}
              />
            </div>
          ) : (
            /* SUCCESS */

            <>
              {/* STATISTICS */}

              <div className="shrink-0">
                <LedgerStats ledger={ledger} />
              </div>

              {/* TABLE */}

              <div className="min-h-0 min-w-0 flex-1">
                <LedgerTable
                  ledger={ledger}
                  setProfile={setSelectProfile}
                  onEditLedger={handleEditLedger}
                />
              </div>
            </>
          )}
        </div>

        {/* RIGHT PROFILE */}

        <div className="hidden min-h-0 min-w-0 xl:block">
          <LedgerProfile ledger={selectProfile} />
        </div>
      </div>

      {/* ADD / EDIT MODAL */}

      {isModalOpen && (
        <LedgerModal
          key={selectLedger?._id ?? "new-ledger"}
          ledger={selectLedger}
          onClose={handleModalClose}
          onSubmit={addLedger}
          updateLedger={updateLedger}
        />
      )}
    </div>
  );
};

export default LedgerPage;