const LowstockHeader = ({products}) => {
  return (
    <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          border-b
          border-slate-100
          px-4
          py-3
          sm:px-5
        "
      >
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Low Stock Alerts
          </h3>

          <p className="mt-0.5 text-xs text-slate-400">
            Products that need attention
          </p>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            bg-red-50
            px-2.5
            py-1
            text-[11px]
            font-medium
            text-red-600
            sm:px-3
            sm:text-xs
          "
        >
          {products.length} Alerts
        </span>
      </div>
  )
}

export default LowstockHeader