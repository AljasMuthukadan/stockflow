
const NoteTab = ({ supplier }) => {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm leading-6 text-slate-600">
              {supplier.notes}
            </p>
          </div>
  )
}

export default NoteTab