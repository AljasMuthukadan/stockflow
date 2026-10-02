import {
  PartyType,
  SupplierInfo,
  ContactInfo,
  OutstandingInfo,
  OrdersInfo,
} from "./Components";

import ActionButton from "../../../../components/common/ActionButton";
import SupplierFilters from "../SupplierFilters";

/* ================================================= */
/* MOBILE CARD */
/* ================================================= */

const SupplierMobileCard = ({
  supplier,
  onEditLedger,
}) => {
  return (
    <article
      className="
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >
      {/* HEADER */}

      <div className="flex min-w-0 items-start justify-between gap-3">
        <SupplierInfo supplier={supplier} />

        <ActionButton
          item={supplier}
          onEdit={() => onEditLedger(supplier)}
          onDelete={() => {
            console.log(
              "Delete ledger with ID:",
              supplier._id
            );
          }}
        />
      </div>

      {/* PARTY TYPE */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Party Type
        </p>

        <PartyType
          type={supplier.partyType || ""}
        />
      </div>

      {/* CONTACT + ORDERS */}

      <div
        className="
          mt-4
          grid
          grid-cols-2
          gap-4
          border-t
          border-slate-100
          pt-4
        "
      >
        <div className="min-w-0">
          <p className="mb-1.5 text-xs text-slate-400">
            Contact
          </p>

          <ContactInfo supplier={supplier} />
        </div>

        <div>
          <p className="mb-1.5 text-xs text-slate-400">
            Orders
          </p>

          <OrdersInfo
            orders={supplier.orders ?? 0}
          />
        </div>
      </div>

      {/* OUTSTANDING */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Outstanding
        </p>

        <OutstandingInfo supplier={supplier} />
      </div>
    </article>
  );
};

/* ================================================= */
/* DESKTOP TABLE */
/* ================================================= */

const SupplierDesktopTable = ({
  filteredLedger = [],
  setProfile,
  onEditLedger,
}) => {
  const handleProfile = (ledger) => {
    setProfile(ledger);
  };

  return (
    <div className="h-full overflow-auto scrollbar-none">
      <table className="w-full min-w-[950px]">
        <thead className="sticky top-0 z-10 bg-slate-50">
          <tr className="text-left text-sm text-slate-500">
            <th className="whitespace-nowrap px-4 py-2.5 font-semibold">
              Ledger
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Party Type
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Contact
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Outstanding
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Orders
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredLedger.map((ledgerItem) => (
            <tr
              key={ledgerItem._id}
              onClick={() =>
                handleProfile(ledgerItem)
              }
              className="
                cursor-pointer
                border-t
                border-slate-200
                transition
                hover:bg-slate-50
              "
            >
              {/* LEDGER */}

              <td className="px-4 py-2.5">
                <SupplierInfo
                  supplier={ledgerItem}
                />
              </td>

              {/* PARTY TYPE */}

              <td className="px-3 py-2.5">
                <PartyType
                  type={ledgerItem?.partyType || ""}
                />
              </td>

              {/* CONTACT */}

              <td className="px-3 py-2.5">
                <ContactInfo
                  supplier={ledgerItem}
                />
              </td>

              {/* OUTSTANDING */}

              <td className="px-3 py-2.5 text-center">
                <div className="flex justify-center">
                  <OutstandingInfo
                    supplier={ledgerItem}
                  />
                </div>
              </td>

              {/* ORDERS */}

              <td className="px-3 py-2.5">
                <OrdersInfo
                  orders={ledgerItem.orders ?? 0}
                />
              </td>

              {/* ACTIONS */}

              <td className="px-3 py-2.5">
                <div
                  className="flex justify-center"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >
                  <ActionButton
                    item={ledgerItem}
                    onEdit={() =>
                      onEditLedger(ledgerItem)
                    }
                    onDelete={() => {
                      console.log(
                        "Delete ledger with ID:",
                        ledgerItem._id
                      );
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ================================================= */
/* MAIN COMPONENT */
/* ================================================= */

const LedgerTable = ({
  setProfile,
  onEditLedger,
  setSearch,
  setPartyType,
  search,
  partyType,
  filteredLedger,
}) => {
  return (
    <div
      className="
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* FILTERS */}

      <div className="shrink-0">
        <SupplierFilters 
          setSearch={setSearch}
          setPartyType={setPartyType}
          search={search}
          partyType={partyType}
        />
      </div>

      {/* MOBILE VIEW */}

      <div className="min-h-0 flex-1 md:hidden">
        <div
          className="
            h-full
            space-y-3
            overflow-y-auto
            p-3
            scrollbar-none
          "
        >
          {filteredLedger.length > 0 ? (
            filteredLedger.map((ledgerItem) => (
              <SupplierMobileCard
                key={ledgerItem._id}
                supplier={ledgerItem}
                onEditLedger={onEditLedger}
              />
            ))
          ) : (
            <div className="flex h-24 items-center justify-center text-sm text-slate-400">
              No parties found
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP VIEW */}

      <div className="hidden min-h-0 flex-1 md:block">
        {filteredLedger.length > 0 ? (
          <SupplierDesktopTable
            filteredLedger={filteredLedger}
            setProfile={setProfile}
            onEditLedger={onEditLedger}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            No parties found
          </div>
        )}
      </div>
    </div>
  );
};

export default LedgerTable;