import {
  Columns3,
  ChevronDown,
  Check,
} from "lucide-react";

const availableFields = [
  "Employee Name",
  "Employee ID",
  "Department",
  "Date",
  "Attendance Status",
  "Salary",
  "Advance Amount",
  "Fine Amount",
  "Total Amount",
  "Created Date",
];

const DataFieldsSection = ({
  open,
  onToggle,
  selectedFields,
  setSelectedFields,
}) => {

  const toggleField = (field) => {
    setSelectedFields((prev) => {

      if (prev.includes(field)) {
        return prev.filter(
          (item) => item !== field
        );
      }

      return [...prev, field];
    });
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

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100">

            <Columns3
              size={18}
              className="text-orange-600"
            />

          </div>

          <div>

            <h3 className="text-sm font-semibold text-slate-800">
              Data Fields
            </h3>

            <p className="text-xs text-slate-500">
              Choose the information to include in your report
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

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">

            {availableFields.map((field) => {

              const isSelected =
                selectedFields.includes(field);

              return (

                <button
                  key={field}
                  type="button"
                  onClick={() => toggleField(field)}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition

                    ${
                      isSelected
                        ? "border-green-300 bg-green-50 text-green-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }
                  `}
                >

                  <span className="font-medium">
                    {field}
                  </span>

                  <div
                    className={`
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-md
                      border

                      ${
                        isSelected
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-slate-300"
                      }
                    `}
                  >

                    {isSelected && (
                      <Check size={13} />
                    )}

                  </div>

                </button>

              );
            })}

          </div>

          {/* Selected Count */}

          <div className="mt-4 border-t border-slate-100 pt-4">

            <p className="text-xs text-slate-500">

              <span className="font-semibold text-slate-700">
                {selectedFields.length}
              </span>{" "}
              fields selected

            </p>

          </div>

        </div>

      )}

    </section>
  );
};

export default DataFieldsSection;