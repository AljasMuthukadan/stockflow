import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Landmark,
  Clock3,
  Languages,
  Pencil,
  BadgeCheck,
} from "lucide-react";

import { company } from "./settingsData";

const Field = ({ icon: Icon, label, value }) => {
  return (
    <div
      className="
        flex
        items-start
        gap-2.5
        rounded-lg
        border
        border-slate-200
        bg-slate-50
        px-2.5
        py-2
        transition-all
        duration-200
        hover:border-green-300
        hover:bg-white
      "
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100">
        <Icon
          size={16}
          className="text-green-600"
        />
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 break-words text-[13px] font-medium text-slate-700">
          {value}
        </p>

      </div>
    </div>
  );
};

const CompanyProfile = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
            <Building2
              size={26}
              className="text-green-600"
            />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-lg font-bold text-slate-800">
                {company.name}
              </h2>

              <BadgeCheck
                size={16}
                className="text-green-600"
              />

            </div>

            <p className="mt-0.5 text-xs text-slate-500">
              Manufacturing ERP Company
            </p>

          </div>

        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            py-1.5
            text-xs
            font-medium
            text-slate-700
            transition
            hover:bg-slate-50
          "
        >
          <Pencil size={15} />
          Edit Profile
        </button>

      </div>

      {/* Body */}

      <div className="p-4">

        <div className="grid gap-2.5 md:grid-cols-2">

          <Field
            icon={Mail}
            label="Email"
            value={company.email}
          />

          <Field
            icon={Phone}
            label="Phone"
            value={company.phone}
          />

          <Field
            icon={Landmark}
            label="GST Number"
            value={company.gst}
          />

          <Field
            icon={Building2}
            label="Industry"
            value={company.industry}
          />

          <Field
            icon={BadgeCheck}
            label="Registration"
            value={company.registration}
          />

          <Field
            icon={Clock3}
            label="Time Zone"
            value={company.timezone}
          />

          <div className="md:col-span-2">

            <Field
              icon={MapPin}
              label="Business Address"
              value={company.address}
            />

          </div>

          <Field
            icon={Globe}
            label="Currency"
            value={company.currency}
          />

          <Field
            icon={Languages}
            label="Language"
            value={company.language}
          />

        </div>

      </div>

    </div>
  );
};

export default CompanyProfile;