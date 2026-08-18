import {statusBadge, paymentBadge } from './utils'
import ActionButton from '../../../components/common/ActionButton';

const TableMobileview = ({filteredOrders}) => {
  return (
    <div className="block  md:hidden">
        <div className="space-y-3 p-3">
          {filteredOrders.map((order) => (
            <article
              key={order.id}
              className="
                w-full
                min-w-0
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
              {/* Order Header */}

              <div
                className="
                  flex
                  min-w-0
                  items-start
                  justify-between
                  gap-3
                "
              >
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Order ID
                  </p>

                  <h3
                    className="
                      mt-1
                      truncate
                      text-sm
                      font-semibold
                      text-slate-800
                    "
                  >
                    {order.id}
                  </h3>
                </div>

                <ActionButton />
              </div>

              {/* Customer */}

              <div
                className="
                  mt-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                <p className="text-xs text-slate-400">
                  Customer
                </p>

                <p className="mt-1 truncate text-sm font-medium text-slate-700">
                  {order.customer}
                </p>
              </div>

              {/* Details */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-x-4
                  gap-y-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                {/* Date */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Date
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-700">
                    {order.date}
                  </p>
                </div>

                {/* Amount */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Amount
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {order.amount}
                  </p>
                </div>

                {/* Payment */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Payment
                  </p>

                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      ${paymentBadge(order.payment)}
                    `}
                  >
                    {order.payment}
                  </span>
                </div>

                {/* Status */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Status
                  </p>

                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      ${statusBadge(order.status)}
                    `}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Empty State */}

          {filteredOrders.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                No orders found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try searching with a different order or customer name.
              </p>
            </div>
          )}
        </div>
      </div>
  )
}

export default TableMobileview