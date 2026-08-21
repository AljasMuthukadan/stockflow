
import { suppliers } from "../supplierData";
import { SupplyCategories, 
  PartyType, 
  SupplierInfo, 
  ContactInfo, 
  OutstandingInfo, 
  OrdersInfo ,  } from "./Components";
import ActionButton from "../../../../components/common/ActionButton"
import SupplierFilters from "../SupplierFilters";
import Pagination from "../../../../components/common/Pagination";




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
        transition
        hover:shadow-md
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex min-w-0 items-start justify-between gap-3">
        <SupplierInfo supplier={supplier} />

        <ActionButton />
      </div>

      {/* ================================================= */}
      {/* PARTY TYPE */}
      {/* ================================================= */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Party Type
        </p>

        <PartyType type={supplier.partyType} />
      </div>

      {/* ================================================= */}
      {/* SUPPLIES */}
      {/* ================================================= */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Supplies
        </p>

        <SupplyCategories categories={supplier.supplyCategory} />
      </div>

      {/* ================================================= */}
      {/* CONTACT + ORDERS */}
      {/* ================================================= */}

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
        {/* Contact */}

        <div className="min-w-0">
          <p className="mb-1.5 text-xs text-slate-400">
            Contact
          </p>

          <ContactInfo supplier={supplier} />
        </div>

        {/* Orders */}

        <div>
          <p className="mb-1.5 text-xs text-slate-400">
            Orders
          </p>

          <OrdersInfo orders={supplier.orders} />
        </div>
      </div>

      {/* ================================================= */}
      {/* OUTSTANDING */}
      {/* ================================================= */}

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
/* MAIN COMPONENT */
/* ================================================= */

const SupplierTable = () => {
 



  return (
    <div
      className="
        mb-3
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* ================================================= */}
      {/* FILTERS */}
      {/* ================================================= */}

      <SupplierFilters />

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <div className="block md:hidden">
        <div
          className="
            max-h-[calc(100vh-330px)]
            space-y-3
            overflow-y-auto
            p-3
            scrollbar-none
          "
        >
          {suppliers.map((supplier) => (
            <SupplierMobileCard
              key={supplier.id}
              supplier={supplier}
            />
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* TABLET + DESKTOP */}
      {/* ================================================= */}

      <div
        className="
          hidden
          overflow-x-auto
          scrollbar-none
          md:block
        "
      >
        <table className="w-full min-w-[1150px]">
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-3 font-semibold">
                Supplier
              </th>

              <th className="px-4 py-3 font-semibold">
                Party Type
              </th>

              <th className="px-3 py-3 font-semibold">
                Supplies
              </th>

              <th className="px-4 py-3 font-semibold">
                Contact
              </th>

              <th className="px-4 py-3 font-semibold">
                Outstanding
              </th>

              <th className="px-4 py-3 font-semibold">
                Orders
              </th>

              <th className="px-4 py-3 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          {/* ================================================= */}
          {/* BODY */}
          {/* ================================================= */}

          <tbody>
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="
                  border-t
                  border-slate-200
                  transition
                  hover:bg-slate-50
                "
              >
                {/* Supplier */}

                <td className="px-6 py-3">
                  <SupplierInfo supplier={supplier} />
                </td>

                {/* Party Type */}

                <td className="px-4 py-3">
                  <PartyType
                    type={supplier.partyType}
                  />
                </td>

                {/* Supplies */}

                <td className="w-56 px-3 py-3">
                  <SupplyCategories
                    categories={supplier.supplyCategory}
                  />
                </td>

                {/* Contact */}

                <td className="px-4 py-3">
                  <ContactInfo supplier={supplier} />
                </td>

                {/* Outstanding */}

                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center">
                    <OutstandingInfo
                      supplier={supplier}
                    />
                  </div>
                </td>

                {/* Orders */}

                <td className="px-4 py-3">
                  <OrdersInfo
                    orders={supplier.orders}
                  />
                </td>

                {/* Action */}

                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <ActionButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================================= */}
      {/* PAGINATION */}
      {/* ================================================= */}

      <Pagination />
    </div>
  );
};

export default SupplierTable;