const PurchaseSummary = ({ items }) => {
  const subtotal = items.reduce((total, item) => {
    const itemSubtotal =
      item.quantity * item.rate;

    const discount =
      itemSubtotal * (item.discount / 100);

    return total + itemSubtotal - discount;
  }, 0);

  const totalTax = items.reduce((total, item) => {
    const itemSubtotal =
      item.quantity * item.rate;

    const discount =
      itemSubtotal * (item.discount / 100);

    const taxableAmount =
      itemSubtotal - discount;

    return total + taxableAmount * (item.tax / 100);
  }, 0);

  const grandTotal =
    subtotal + totalTax;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

      <h3 className="text-sm font-semibold text-slate-800">
        Purchase Summary
      </h3>

      <div className="mt-4 space-y-2.5 text-sm">

        <div className="flex items-center justify-between text-slate-500">
          <span>Subtotal</span>

          <span>
            ₹{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-500">
          <span>Total Tax</span>

          <span>
            ₹{totalTax.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-slate-200 pt-3">

          <div className="flex items-center justify-between text-base font-semibold text-slate-800">

            <span>Grand Total</span>

            <span>
              ₹{grandTotal.toFixed(2)}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PurchaseSummary;