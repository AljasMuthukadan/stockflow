
const FormFooter = ({onClose}) => {
  return (
    <div className="sticky bottom-0 flex shrink-0 items-center justify-between border-t border-slate-200 bg-white px-5 py-3">

            <p className="hidden text-xs text-slate-400 sm:block">
              Fields marked with * are required
            </p>

            <div className="ml-auto flex items-center gap-2">

              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
              >
                Add Item
              </button>

            </div>

          </div>
  )
}

export default FormFooter