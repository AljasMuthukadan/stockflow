const ProfileSection = ({supplier}) => {
  return (
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
  )
}

export default ProfileSection