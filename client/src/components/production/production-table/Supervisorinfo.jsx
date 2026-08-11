const SupervisorInfo = ({ supervisor }) => {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-blue-50
          text-xs
          font-semibold
          text-blue-700
        "
      >
        {supervisor.charAt(0)}
      </div>

      <div className="min-w-0">
        <p className="truncate font-medium text-slate-800">
          {supervisor}
        </p>

        <p className="mt-0.5 text-xs text-slate-400">
          Supervisor
        </p>
      </div>
    </div>
  );
};
export default SupervisorInfo;