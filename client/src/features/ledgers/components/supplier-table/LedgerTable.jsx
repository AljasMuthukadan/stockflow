import {
  SupplyCategories,
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

const SupplierMobileCard = ({ supplier }) => {
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
      <div className="flex min-w-0 items-start justify-between gap-3">
        <SupplierInfo supplier={supplier} />
        <ActionButton />
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Party Type
        </p>

        <PartyType type={supplier.partyType} />
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Supplies
        </p>

        <SupplyCategories
          categories={supplier.supplyCategory}
        />
      </div>

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

          <OrdersInfo orders={supplier.orders} />
        </div>
      </div>

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

const SupplierDesktopTable = ({ ledger, setProfile }) => {
  const handleProfile = (supplier)=> {
    setProfile(supplier)
  }
  return (
    <div className="h-full overflow-auto scrollbar-none">
      <table className="w-full min-w-[1050px]">
        <thead className="sticky top-0 z-10 bg-slate-50">
          <tr className="text-left text-sm text-slate-500">
            <th className="whitespace-nowrap px-4 py-2.5 font-semibold">
              Supplier
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Party Type
            </th>

            <th className="whitespace-nowrap px-3 py-2.5 font-semibold">
              Supplies
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
          {ledger.map((supplier) => (
            <tr
              key={supplier.id}
              onClick={()=>handleProfile(supplier)}
              className="
                border-t
                border-slate-200
                transition
                hover:bg-slate-50
              "
            >
              <td className="px-4 py-2.5">
                <SupplierInfo supplier={supplier} />
              </td>

              <td className="px-3 py-2.5">
                <PartyType type={supplier.partyType} />
              </td>

              <td className="w-52 px-3 py-2.5">
                <SupplyCategories
                  categories={supplier.supplyCategory}
                />
              </td>

              <td className="px-3 py-2.5">
                <ContactInfo supplier={supplier} />
              </td>

              <td className="px-3 py-2.5 text-center">
                <div className="flex justify-center">
                  <OutstandingInfo supplier={supplier} />
                </div>
              </td>

              <td className="px-3 py-2.5">
                <OrdersInfo orders={supplier.orders} />
              </td>

              <td className="px-3 py-2.5">
                <div className="flex justify-center">
                  <ActionButton />
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

const LedgerTable = ({ ledger = [] , setProfile }) => {
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
        <SupplierFilters />
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
          {ledger.length > 0 ? (
            ledger.map((supplier) => (
              <SupplierMobileCard
                key={supplier.id}
                supplier={supplier}
              />
            ))
          ) : (
            <div className="flex h-24 items-center justify-center text-sm text-slate-400">
              No suppliers found
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP VIEW */}

      <div className="hidden min-h-0 flex-1 md:block">
        {ledger.length > 0 ? (
          <SupplierDesktopTable ledger={ledger} setProfile={setProfile} />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            No suppliers found
          </div>
        )}
      </div>
    </div>
  );
};

export default LedgerTable;