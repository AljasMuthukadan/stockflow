import {
  BadgeIndianRupee,
  Building2,
  Truck,
  Users,
} from "lucide-react";

const colors = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    text: "text-purple-600",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    text: "text-blue-600",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    text: "text-orange-600",
  },
};

const LedgerStats = ({ ledger = [] }) => {
  const totalLedgers = ledger.length;

  const sundryDebtors = ledger.filter(
    (party) => party.partyType === "Sundry Debtor"
  );

  const sundryCreditors = ledger.filter(
    (party) => party.partyType === "Sundry Creditor"
  );

  const others = ledger.filter(
    (party) =>
      !["Sundry Debtor", "Sundry Creditor"].includes(party.partyType)
  );

  const totalPayable = sundryCreditors.reduce(
    (total, party) => total + Number(party.outstanding || 0),
    0
  );

  const totalReceivable = sundryDebtors.reduce(
    (total, party) => total + Number(party.outstanding || 0),
    0
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const stats = [
    {
      title: "Total Ledgers",
      value: totalLedgers,
      sub: "+8 this month",
      icon: Users,
      color: "green",
    },
    {
      title: "Sundry Creditors",
      value: sundryCreditors.length,
      sub: `Payable ${formatCurrency(totalPayable)}`,
      icon: Truck,
      color: "purple",
    },
    {
      title: "Sundry Debtors",
      value: sundryDebtors.length,
      sub: `Receivable ${formatCurrency(totalReceivable)}`,
      icon: BadgeIndianRupee,
      color: "blue",
    },
    {
      title: "Other Parties",
      value: others.length,
      sub: "Active Parties",
      icon: Building2,
      color: "orange",
    },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              py-3
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              sm:px-4
              sm:py-4
              lg:px-5
              lg:py-3
            "
          >
            <div
              className="
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-slate-100/40
                transition
                group-hover:scale-110
                sm:-right-10
                sm:-top-10
                sm:h-28
                sm:w-28
                lg:h-32
                lg:w-32
              "
            />

            <div className="relative flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-500 sm:text-sm">
                  {item.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-800 sm:mt-3 sm:text-3xl lg:text-4xl">
                  {item.value}
                </h2>

                <p
                  className={`
                    mt-2
                    truncate
                    text-[11px]
                    sm:mt-3
                    sm:text-xs
                    lg:mt-4
                    lg:text-sm
                    ${colors[item.color].text}
                  `}
                >
                  {item.sub}
                </p>
              </div>

              <div
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  sm:h-11
                  sm:w-11
                  lg:h-14
                  lg:w-14
                  lg:rounded-2xl
                  ${colors[item.color].bg}
                `}
              >
                <Icon
                  size={18}
                  className={`
                    ${colors[item.color].icon}
                    sm:size-[20px]
                    lg:size-[26px]
                  `}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LedgerStats;