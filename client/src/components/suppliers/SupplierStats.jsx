import {
  Users,
  Truck,
  BadgeIndianRupee,
  Building2,
} from "lucide-react";

const stats = [
  {
    title: "Total Suppliers",
    value: "56",
    sub: "+8 this month",
    icon: Users,
    color: "green",
  },
  {
    title: "Sundry Creditors",
    value: "38",
    sub: "Outstanding ₹8,74,250",
    icon: Truck,
    color: "purple",
  },
  {
    title: "Sundry Debtors",
    value: "14",
    sub: "Receivable ₹12,48,600",
    icon: BadgeIndianRupee,
    color: "blue",
  },
  {
    title: "Other Parties",
    value: "4",
    sub: "Active Parties",
    icon: Building2,
    color: "orange",
  },
];

const colors = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    text: "text-red-500",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    text: "text-green-600",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    text: "text-slate-500",
  },
};

const SupplierStats = () => {
  return (
    <div className="grid gap-3 w-full sm:grid-cols-2 xl:grid-cols-4">

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
            py-3
            px-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "
          >

            {/* Decorative Circle */}

            <div
              className="
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              bg-slate-100/40
              transition
              group-hover:scale-110
              "
            />

            <div className="relative flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-800">
                  {item.value}
                </h2>

                <p className={`mt-4 text-sm ${colors[item.color].text}`}>
                  {item.sub}
                </p>

              </div>

              <div
                className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                ${colors[item.color].bg}
                `}
              >
                <Icon
                  size={26}
                  className={colors[item.color].icon}
                />
              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
};

export default SupplierStats;