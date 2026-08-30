import {
  FileText,
  Tag,
  Database,
  AlignLeft,
  ChevronDown,
} from "lucide-react";

const BasicInfoSection = ({
  open,
  onToggle,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* Header */}

      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          px-5
          py-4
          text-left
          transition
          hover:bg-slate-50
        "
      >

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">

            <FileText
              size={18}
              className="text-blue-600"
            />

          </div>

          <div>

            <h3 className="text-sm font-semibold text-slate-800">
              Basic Information
            </h3>

            <p className="text-xs text-slate-500">
              Define your custom report
            </p>

          </div>

        </div>

        <ChevronDown
          size={18}
          className={`
            text-slate-400
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}

      {open && (

        <div className="border-t border-slate-100 p-5">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* Report Name */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Report Name
              </label>

              <div className="relative">

                <FileText
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  name="reportName"
                  value={formData.reportName}
                  onChange={handleChange}
                  placeholder="Example: Employee Fine Report"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    transition
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-100
                  "
                />

              </div>

            </div>

            {/* Category */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Report Category
              </label>

              <div className="relative">

                <Tag
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >

                  <option value="">
                    Select Category
                  </option>

                  <option>Employee</option>
                  <option>Finance</option>
                  <option>Inventory</option>
                  <option>Production</option>
                  <option>Sales</option>
                  <option>Purchase</option>
                  <option>Custom</option>

                </select>

              </div>

            </div>

            {/* Data Source */}

            <div className="md:col-span-2">

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Data Source
              </label>

              <div className="relative">

                <Database
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="dataSource"
                  value={formData.dataSource}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >

                  <option value="">
                    Select Data Source
                  </option>

                  <option>Employees</option>
                  <option>Attendance Records</option>
                  <option>Salary & Advances</option>
                  <option>Inventory Items</option>
                  <option>Stock Movements</option>
                  <option>Production Records</option>
                  <option>Sales Orders</option>
                  <option>Purchase Orders</option>

                </select>

              </div>

            </div>

            {/* Description */}

            <div className="md:col-span-2">

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Description
              </label>

              <div className="relative">

                <AlignLeft
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-3
                    text-slate-400
                  "
                />

                <textarea
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what information this report should contain..."
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    transition
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-100
                  "
                />

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default BasicInfoSection;