
import { partyBadge, outstandingBadge } from "./utils";
export const PartyType = ({ type }) => {
  return (
    <span
      className={`
        inline-flex
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        ${partyBadge(type)}
      `}
    >
      {type}
    </span>
  );
};

export const SupplyCategories = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {categories.slice(0, 2).map((item) => (
        <span
          key={item}
          className="
            whitespace-nowrap
            rounded-md
            bg-slate-100
            px-2.5
            py-1
            text-[11px]
            font-medium
            text-slate-700
          "
        >
          {item}
        </span>
      ))}

      {categories.length > 2 && (
        <span
          className="
            whitespace-nowrap
            rounded-md
            bg-emerald-50
            px-2.5
            py-1
            text-[11px]
            font-semibold
            text-emerald-700
          "
        >
          +{categories.length - 2}
        </span>
      )}
    </div>
  );
};

export const SupplierInfo = ({ supplier }) => {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-green-100
          text-sm
          font-bold
          text-green-700
        "
      >
        {supplier.avatar}
      </div>

      <div className="min-w-0">
        <h3 className="truncate font-semibold text-slate-800">
          {supplier.company}
        </h3>

        <p className="mt-0.5 truncate text-[11px] text-slate-500">
          GSTIN : {supplier.gstin}
        </p>

        <p className="truncate text-[11px] text-slate-400">
          {supplier.city}
        </p>
      </div>
    </div>
  );
};

export const ContactInfo = ({ supplier }) => {
  return (
    <div className="min-w-0">
      <p className="truncate font-medium text-slate-800">
        {supplier.contact}
      </p>

      <p className="truncate text-[11px] text-slate-500">
        {supplier.phone}
      </p>

      <p className="truncate text-[11px] text-slate-400">
        {supplier.email}
      </p>
    </div>
  );
};

export const OutstandingInfo = ({ supplier }) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-slate-800">
        ₹{supplier.outstanding.toLocaleString()}
      </h4>

      <span
        className={`
          mt-1.5
          inline-flex
          w-fit
          rounded-full
          px-3
          py-1
          text-xs
          font-medium
          ${outstandingBadge(supplier.outstandingType)}
        `}
      >
        {supplier.outstandingType}
      </span>
    </div>
  );
};

/* ================================================= */
/* ORDERS */
/* ================================================= */

export const OrdersInfo = ({ orders }) => {
  return (
    <span
      className="
        inline-flex
        rounded-lg
        bg-slate-100
        px-3
        py-1.5
        text-sm
        font-semibold
        text-slate-700
      "
    >
      {orders}
    </span>
  );
};

