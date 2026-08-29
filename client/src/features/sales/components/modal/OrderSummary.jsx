const OrderSummary = ({ items }) => {

  const subtotal = items.reduce((total, item) => {

    const amount =
      item.quantity *
      item.rate *
      (1 - item.discount / 100);

    return total + amount;

  }, 0);

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

      <h3 className="text-sm font-semibold text-slate-800">
        Order Summary
      </h3>

      <div className="mt-4 space-y-2 text-sm">

        <div className="flex justify-between text-slate-500">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-500">
          <span>Tax (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-slate-200 pt-3">

          <div className="flex justify-between text-base font-semibold text-slate-800">
            <span>Grand Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderSummary;