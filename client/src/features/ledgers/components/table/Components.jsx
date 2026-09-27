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

export const SupplierInfo = ({ supplier }) => {
  const image = supplier?.image;
  const imageUrl =
    typeof image === "string" ? image : null;
   console.log("Img", imageUrl)
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
          overflow-hidden
          rounded-full
          bg-green-100
          text-sm
          font-bold
          text-green-700
        "
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={supplier?.company || "Party"}
            className="h-full w-full object-cover"
          />
        ) : (
          supplier?.avatar || "NP"
        )}
      </div>

      <div className="min-w-0">
        <h3 className="truncate font-semibold text-slate-800">
          {supplier?.company || "Unnamed Company"}
        </h3>

        <p className="mt-0.5 truncate text-[11px] text-slate-500">
          GSTIN : {supplier?.gstin || "Not specified"}
        </p>

        <p className="truncate text-[11px] text-slate-400">
          {supplier?.address?.city || "City not specified"}
        </p>
      </div>
    </div>
  );
};

export const ContactInfo = ({ supplier }) => {
  return (
    <div className="min-w-0">
      <p className="truncate font-medium text-slate-800">
        {supplier?.contactInfo?.personName || "Not Specified"}
      </p>

      <p className="truncate text-[11px] text-slate-500">
        {supplier?.contactInfo?.phoneNo || "Not Specified"}
      </p>

      <p className="truncate text-[11px] text-slate-400">
        {supplier?.contactInfo?.email || "Not defined"}
      </p>
    </div>
  );
};

export const OutstandingInfo = ({ supplier }) => {
  const outstanding = Number(supplier?.outstanding || 0);

  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-slate-800">
        ₹{outstanding.toLocaleString("en-IN")}
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
          ${outstandingBadge(supplier?.outstandingType || "")}
        `}
      >
        {supplier?.outstandingType || "Settled"}
      </span>
    </div>
  );
};

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
      {orders ?? 0}
    </span>
  );
};