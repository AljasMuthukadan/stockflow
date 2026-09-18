import { Mail, MapPin, Phone, User } from "lucide-react";

const OverviewTab = ({ supplier }) => {
  return (
    <div className="space-y-5">

            {/* Financial */}
            <section>
              <h4 className="mb-2 text-sm font-semibold text-slate-800">
                Financial Overview
              </h4>

              <div className="rounded-xl bg-slate-50 px-4 py-2">

                <div className="flex items-center justify-between border-b border-slate-200 py-2.5">
                  <span className="text-sm text-slate-500">
                    Outstanding
                  </span>

                  <span className="text-sm font-semibold text-red-500">
                    {supplier.outstanding} {supplier.outstandingType}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200 py-2.5">
                  <span className="text-sm text-slate-500">
                    Total Orders
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {supplier.totalOrders}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-slate-500">
                    Total Purchase Value
                  </span>

                  <span className="text-base font-bold text-slate-800">
                    {supplier.totalPurchase}
                  </span>
                </div>

              </div>
            </section>

            {/* Contact Person */}
            <section>
              <h4 className="mb-2 text-sm font-semibold text-slate-800">
                Contact Person
              </h4>

              <div className="space-y-2.5">

                <div className="flex items-start gap-2.5">
                  <User
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-500"
                  />

                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">
                      {supplier.contact.name}
                    </h5>

                    <p className="text-xs text-slate-500">
                      {supplier.contact.designation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone
                    size={17}
                    className="shrink-0 text-slate-500"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {supplier.contact.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail
                    size={17}
                    className="shrink-0 text-slate-500"
                  />

                  <span className="break-all text-sm font-medium text-slate-700">
                    {supplier.contact.email}
                  </span>
                </div>

              </div>
            </section>

            {/* Company Address */}
            <section>
              <h4 className="mb-2 text-sm font-semibold text-slate-800">
                Company Address
              </h4>

              <div className="flex items-start gap-2.5">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-slate-500"
                />

                <div className="min-w-0">

                  <h5 className="text-sm font-semibold text-slate-800">
                    {supplier.address.company}
                  </h5>

                  <p className="mt-1 whitespace-pre-line text-sm leading-5 text-slate-600">
                    {supplier.address.address}
                  </p>

                </div>

              </div>
            </section>

          </div>
  )
}

export default OverviewTab