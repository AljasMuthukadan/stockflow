import { Mail, MapPin, Phone, User } from "lucide-react";

const ContactTab = ({ supplier }) => {
  return (
    <div className="space-y-6">

            <div>
              <h4 className="mb-3 text-base font-semibold text-slate-800">
                Contact Information
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-2.5">
                  <User
                    size={17}
                    className="shrink-0 text-slate-500"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {supplier.contact.name}
                    </p>

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

                  <span className="text-sm text-slate-700">
                    {supplier.contact.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail
                    size={17}
                    className="shrink-0 text-slate-500"
                  />

                  <span className="break-all text-sm text-slate-700">
                    {supplier.contact.email}
                  </span>
                </div>

              </div>
            </div>

            <div>
              <h4 className="mb-3 text-base font-semibold text-slate-800">
                Address
              </h4>

              <div className="flex items-start gap-2.5">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-slate-500"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {supplier.address.company}
                  </p>

                  <p className="mt-1 whitespace-pre-line text-sm leading-5 text-slate-600">
                    {supplier.address.address}
                  </p>
                </div>

              </div>
            </div>

          </div>
  )
}

export default ContactTab

