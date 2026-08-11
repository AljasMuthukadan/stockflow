const ProductionTableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Production Order
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Batch
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Quantity
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Progress
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Machine
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Supervisor
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Due Date
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Status
              </th>

              <th className="px-4 py-3 text-center lg:px-5 lg:py-4">
                Action
              </th>
            </tr>
          </thead>
  )
}

export default ProductionTableHeader