import {
  Search,
  Filter,
  CalendarDays,
  Download,
  RotateCcw,
  Plus,
  ChevronDown,
  SlidersHorizontal,
  Factory,
} from "lucide-react";

import SelectField from "../../../components/ui/SelectField";
import Input from "../../../components/ui/Input";

const ProductionFilters = ({
  search = "",
  setSearch,
  orderStatus = "All Status",
  setOrderStatus,
  totalOrders = 0,
  onCreateOrder,
  onExport,
  onRefresh,
  onResetFilters,
  isLoading = false,
  lastUpdated,
}) => {
  const handleReset = () => {
    setSearch?.("");
    setOrderStatus?.("All Status");
    onResetFilters?.();
  };

  const updatedTime = lastUpdated
    ? new Date(lastUpdated).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            <Factory size={21} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                Production Orders
              </h2>

              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {totalOrders} total
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Manage, monitor, and track your production workflow.
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onExport}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <Download size={16} />
            <span>Export</span>
          </button>

          <button
            type="button"
            onClick={onCreateOrder}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm shadow-emerald-600/10 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <Plus size={17} />
            <span>New Order</span>
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-slate-500" />

          <h3 className="text-sm font-semibold text-slate-800">
            Find production orders
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-12">
          {/* Search */}
          <div className="relative sm:col-span-2 xl:col-span-5">
            <Search
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="text"
              placeholder="Search by order ID, product, batch..."
              value={search}
              onChange={(e) => setSearch?.(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch?.("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>

          {/* Status */}
          <div className="relative sm:col-span-1 xl:col-span-3">
            <SelectField
              value={orderStatus}
              onChange={(e) => setOrderStatus?.(e.target.value)}
              className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-9 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            >
              <option value="All Status">All statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </SelectField>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {/* Date Filter — visual placeholder for now */}
          <button
            type="button"
            disabled
            title="Date filtering is not implemented yet"
            className="inline-flex h-11 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-sm text-slate-500 transition sm:col-span-1 xl:col-span-2"
          >
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-slate-400" />
              This Month
            </span>

            <ChevronDown size={15} className="text-slate-400" />
          </button>

          {/* Reset Filters */}
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 sm:col-span-2 xl:col-span-2"
          >
            <RotateCcw size={15} />
            Reset filters
          </button>
        </div>

        {/* Active Filter Summary */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500">Active filters:</span>

            {search.trim() ? (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                Search: {search}
              </span>
            ) : null}

            {orderStatus !== "All Status" && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                Status: {orderStatus}
              </span>
            )}

            {!search.trim() && orderStatus === "All Status" && (
              <span className="text-slate-400">None</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-medium text-slate-500 transition hover:text-emerald-700"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span
            className={`h-2 w-2 rounded-full ${
              isLoading ? "animate-pulse bg-amber-400" : "bg-emerald-500"
            }`}
          />

          <span>
            {isLoading
              ? "Updating production data..."
              : updatedTime
                ? `Last updated at ${updatedTime}`
                : "Production data"}
          </span>
        </div>

        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="inline-flex h-9 items-center justify-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
        >
          <RotateCcw
            size={14}
            className={isLoading ? "animate-spin" : ""}
          />
          Refresh data
        </button>
      </div>
    </section>
  );
};

export default ProductionFilters;