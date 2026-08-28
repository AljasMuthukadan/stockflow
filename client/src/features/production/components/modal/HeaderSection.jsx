import { X, BookA } from 'lucide-react';

const HeaderSection = ({ onClose }) => {
  return (
     <div className="flex shrink-0 items-center  justify-between border-b border-slate-200 px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <BookA
                size={20}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                New Purchase Order
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Create a new purchase order for your inventory.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />

          </button>

        </div>
  )
}

export default HeaderSection