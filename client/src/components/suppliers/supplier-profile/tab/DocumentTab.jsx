
const DocumentTab = ({ supplier }) => {
  return (
   < div className="space-y-2.5">

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
  )
}

export default DocumentTab