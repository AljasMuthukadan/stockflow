import {
  Package,
  Plus,
  Trash2,
  ChevronDown,
} from "lucide-react";

const ItemsSection = ({
  open,
  onToggle,
  items,
  setItems,
}) => {

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        item: "",
        quantity: 1,
        unit: "PCS",
        rate: 0,
        discount: 0,
      },
    ]);
  };

  const removeItem = (id) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const updateItem = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

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

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
            <Package
              size={18}
              className="text-purple-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Order Items
            </h3>

            <p className="text-xs text-slate-500">
              Add products to this sales order
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

      {open && (
        <div className="border-t border-slate-100 p-5">

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[800px]">

              <thead>

                <tr className="border-b border-slate-200 text-left">

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Item
                  </th>

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Qty
                  </th>

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Unit
                  </th>

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Rate
                  </th>

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Discount
                  </th>

                  <th className="pb-3 text-xs font-medium text-slate-500">
                    Amount
                  </th>

                  <th />

                </tr>

              </thead>

              <tbody>

                {items.map((item) => {

                  const amount =
                    item.quantity *
                    item.rate *
                    (1 - item.discount / 100);

                  return (

                    <tr
                      key={item.id}
                      className="border-b border-slate-100"
                    >

                      <td className="py-3 pr-3">

                        <select
                          value={item.item}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "item",
                              e.target.value
                            )
                          }
                          className="
                            w-full
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                            outline-none
                            focus:border-green-500
                          "
                        >
                          <option value="">
                            Select Item
                          </option>

                          <option>
                            Product A
                          </option>

                          <option>
                            Product B
                          </option>

                          <option>
                            Product C
                          </option>

                        </select>

                      </td>

                      <td className="py-3 pr-3">

                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "quantity",
                              Number(e.target.value)
                            )
                          }
                          className="
                            w-20
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                            outline-none
                          "
                        />

                      </td>

                      <td className="py-3 pr-3">

                        <select
                          value={item.unit}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "unit",
                              e.target.value
                            )
                          }
                          className="
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                          "
                        >
                          <option>
                            PCS
                          </option>

                          <option>
                            KG
                          </option>

                          <option>
                            BOX
                          </option>

                        </select>

                      </td>

                      <td className="py-3 pr-3">

                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "rate",
                              Number(e.target.value)
                            )
                          }
                          className="
                            w-24
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                          "
                        />

                      </td>

                      <td className="py-3 pr-3">

                        <input
                          type="number"
                          value={item.discount}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "discount",
                              Number(e.target.value)
                            )
                          }
                          className="
                            w-20
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                          "
                        />

                      </td>

                      <td className="py-3 pr-3 text-sm font-medium text-slate-700">
                        ₹{amount.toFixed(2)}
                      </td>

                      <td>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="
                            rounded-lg
                            p-2
                            text-red-500
                            transition
                            hover:bg-red-50
                          "
                        >
                          <Trash2 size={17} />
                        </button>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

          {/* Add Item */}

          <button
            type="button"
            onClick={addItem}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-dashed
              border-green-300
              px-4
              py-2
              text-sm
              font-medium
              text-green-600
              transition
              hover:bg-green-50
            "
          >
            <Plus size={17} />

            Add Item

          </button>

        </div>
      )}

    </div>
  );
};

export default ItemsSection;