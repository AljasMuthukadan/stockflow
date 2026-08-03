import { useState } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

const supplier = {
  company: "ABC Foods Pvt Ltd",
  avatar: "AF",

  partyType: "Sundry Creditor",

  gst: "27ABCDE1234F1Z5",

  categories: [
    "Sugar",
    "Milk Powder",
    "Cocoa Powder",
  ],

  outstanding: "₹85,400",

  outstandingType: "Payable",

  totalOrders: 42,

  totalPurchase: "₹5,85,200",

  contact: {
    name: "John Mathew",
    designation: "Manager – Sales",
    phone: "+91 98765 43210",
    email: "contact@abcfoods.com",
  },

  address: {
    company: "ABC Foods Pvt Ltd",
    address:
      "No. 12, Industrial Estate, Kaloor,\nErnakulam, Kerala - 682017, India",
  },

  documents: [
    {
      name: "GST Certificate.pdf",
      size: "2.4 MB",
    },
    {
      name: "PAN Card.pdf",
      size: "980 KB",
    },
    {
      name: "Supplier Agreement.pdf",
      size: "1.8 MB",
    },
  ],

  notes:
    "Reliable supplier with consistent delivery performance. Payment terms are Net 30 days. Preferred vendor for sugar and milk powder procurement.",
};

export default function SupplierProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "contact",
      label: "Contact & Address",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];

  return (
    <div className="w-full overflow-hidden mb-3 rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-2.5">
        <h2 className="text-sm font-semibold text-slate-800">
          Supplier Details
        </h2>

        <button className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100">
          <X size={17} />
        </button>
      </div>

      {/* Supplier Header */}
      <div className="px-5 py-4">
        <div className="flex items-start gap-3.5">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
            {supplier.avatar}
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-tight text-slate-800">
              {supplier.company}
            </h3>

            <span className="mt-1 inline-flex rounded-md px-2.5 py-0.5 text-xs font-medium text-red-600">
              {supplier.partyType}
            </span>

            <p className="mt-1.5 text-xs text-slate-500">
              GSTIN: {supplier.gst}
            </p>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 px-5">
        <div className="flex gap-6">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 py-3 text-sm font-medium whitespace-nowrap transition ${
                activeTab === tab.id
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}

        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* ========================= */}
        {/* OVERVIEW TAB */}
        {/* ========================= */}

        {activeTab === "overview" && (
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
        )}

        {/* ====================== */}
        {/* CONTACT TAB */}
        {/* ====================== */}

        {activeTab === "contact" && (
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
        )}

        {/* ====================== */}
        {/* DOCUMENTS TAB */}
        {/* ====================== */}

        {activeTab === "documents" && (
          <div className="space-y-2.5">

            {supplier.documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3.5 py-2.5"
              >

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800">
                    {doc.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {doc.size}
                  </p>
                </div>

                <button className="shrink-0 rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-200">
                  View
                </button>

              </div>
            ))}

          </div>
        )}

        {/* ====================== */}
        {/* NOTES TAB */}
        {/* ====================== */}

        {activeTab === "notes" && (
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm leading-6 text-slate-600">
              {supplier.notes}
            </p>
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-4">

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700">
            View Full Profile
            <ArrowRight size={16} />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            <ShoppingCart size={16} />
            New Purchase Order
          </button>

        </div>

      </div>
    </div>
  );
}