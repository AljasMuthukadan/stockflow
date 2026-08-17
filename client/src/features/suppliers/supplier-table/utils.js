
export const partyBadge = (type) => {
  switch (type) {
    case "Sundry Creditor":
      return "bg-red-50 text-red-700 border-red-200";

    case "Sundry Debtor":
      return "bg-green-50 text-green-700 border-green-200";

    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const outstandingBadge = (type) => {
  switch (type) {
    case "Payable":
      return "bg-red-100 text-red-700";

    case "Receivable":
      return "bg-green-100 text-green-700";

    default:
      return "bg-slate-100 text-slate-600";
  }
};