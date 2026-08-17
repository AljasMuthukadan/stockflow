
const TabHeader = ({activeTab, setActiveTab, tabs}) => {
  return (
    <div className="border-b  border-slate-200 px-5">
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
  )
}

export default TabHeader