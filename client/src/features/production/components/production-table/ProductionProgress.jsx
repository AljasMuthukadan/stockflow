import {progressColor} from "./utils";
const ProductionProgress = ({ progress }) => {    
  return (
    <div className="w-full min-w-0">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">
          {progress}%
        </span>

        <span className="text-slate-400">
          Completed
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${progressColor(
            progress
          )}`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProductionProgress;