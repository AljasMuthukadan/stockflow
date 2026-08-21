import { ArrowUp } from "lucide-react";
import { stats } from "./salesData";

const colors = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },

  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },

  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },

  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
};

const StatsCards = () => {
  return (
    <div
      className="
      grid
      grid-cols-2
      lg:grid-cols-3
      gap-4
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
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

            <div className="flex items-center justify-between">

              <div
                className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg

                ${colors[item.color].bg}
                `}
              >
                <Icon
                  size={20}
                  className={colors[item.color].text}
                />
              </div>


              {item.change && (
                <span
                  className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-50
                  px-2
                  py-1
                  text-xs
                  font-semibold
                  text-green-600
                  "
                >
                  <ArrowUp size={12}/>
                  {item.change}
                </span>
              )}

            </div>


            <p className="mt-3 text-xs text-slate-500">
              {item.title}
            </p>


            <h2 className="
              mt-1
              text-2xl
              font-bold
              text-slate-800
            ">
              {item.value}
            </h2>


            <p className="mt-1 text-xs text-slate-400">
              {item.sub}
            </p>


          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;