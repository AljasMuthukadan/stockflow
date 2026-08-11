import { badgeStyle  } from "./utils";
const ProductionStatus = ({ status }) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        whitespace-nowrap
        rounded-full
        px-2.5
        py-1
        text-xs
        font-semibold
        ${badgeStyle(status)}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

export default ProductionStatus;