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
    <div className="w-full overflow-hidden rounded-xl  border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <h2 className="text-md font-semibold text-slate-800">
          Supplier Details
        </h2>

        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100">
          <X size={18} />
        </button>
      </div>

      {/* Supplier */}

      <div className="px-6 py-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-md font-bold text-white">
            {supplier.avatar}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              {supplier.company}
            </h3>

            <span className="mt-2 inline-flex rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
              {supplier.partyType}
            </span>

            <p className="mt-3 text-sm text-slate-500">
              GSTIN: {supplier.gst}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}

      <div className="border-b border-slate-200 px-6">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 py-4 text-sm font-medium whitespace-nowrap transition ${
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

      <div className="p-6">
        {/* ========================= */}
        {/* OVERVIEW TAB */}
        {/* ========================= */}

        {activeTab === "overview" && (
          <div className="space-y-8">

            {/* Categories */}

            <section>
              <h4 className="mb-4 font-semibold text-slate-800">
                Supply Categories
              </h4>

              <div className="flex flex-wrap gap-2">
                {supplier.categories.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded-md border border-blue-200 px-3 py-1 text-sm font-semibold text-blue-600">
                  +1
                </span>
              </div>
            </section>

            {/* Financial */}

            <section>
              <h4 className="mb-4 font-semibold text-slate-800">
                Financial Overview
              </h4>

              <div className="rounded-xl bg-slate-50 p-5">

                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-500">
                    Outstanding
                  </span>

                  <span className="font-semibold text-red-500">
                    {supplier.outstanding} {supplier.outstandingType}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200 py-4">
                  <span className="text-slate-500">
                    Total Orders
                  </span>

                  <span className="font-semibold">
                    {supplier.totalOrders}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-slate-500">
                    Total Purchase Value
                  </span>

                  <span className="text-lg font-bold text-slate-800">
                    {supplier.totalPurchase}
                  </span>
                </div>

              </div>
            </section>
                        {/* Contact Person */}

            <section>
              <h4 className="mb-4 font-semibold text-slate-800">
                Contact Person
              </h4>

              <div className="space-y-5">

                <div className="flex items-start gap-3">
                  <User size={18} className="mt-1 text-slate-500" />

                  <div>
                    <h5 className="font-semibold text-slate-800">
                      {supplier.contact.name}
                    </h5>

                    <p className="text-sm text-slate-500">
                      {supplier.contact.designation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-500" />

                  <span className="font-medium text-slate-700">
                    {supplier.contact.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-slate-500" />

                  <span className="font-medium text-slate-700">
                    {supplier.contact.email}
                  </span>
                </div>

              </div>
            </section>

            {/* Company Address */}

            <section>
              <h4 className="mb-4 font-semibold text-slate-800">
                Company Address
              </h4>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-slate-500" />

                <div>
                  <h5 className="font-semibold text-slate-800">
                    {supplier.address.company}
                  </h5>

                  <p className="mt-1 whitespace-pre-line text-slate-600">
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
          <div className="space-y-8">

            <div>
              <h4 className="mb-5 text-lg font-semibold">
                Contact Information
              </h4>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <User size={18} className="text-slate-500" />
                  <div>
                    <p className="font-semibold">
                      {supplier.contact.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {supplier.contact.designation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-500" />
                  <span>{supplier.contact.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-slate-500" />
                  <span>{supplier.contact.email}</span>
                </div>

              </div>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-semibold">
                Address
              </h4>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-slate-500" />

                <div>
                  <p className="font-semibold">
                    {supplier.address.company}
                  </p>

                  <p className="mt-2 whitespace-pre-line text-slate-600">
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
          <div className="space-y-4">

            {supplier.documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {doc.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {doc.size}
                  </p>
                </div>

                <button className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200">
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
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="leading-7 text-slate-600">
              {supplier.notes}
            </p>
          </div>
        )}

        {/* Bottom Buttons */}

        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700">
            View Full Profile
            <ArrowRight size={18} />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-3 font-medium text-slate-700 transition hover:bg-slate-50">
            <ShoppingCart size={18} />
            New Purchase Order
          </button>

        </div>

      </div>
    </div>
  );
}