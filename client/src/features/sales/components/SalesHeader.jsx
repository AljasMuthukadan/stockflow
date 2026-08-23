import {
  Upload,
  Plus,
} from "lucide-react";
import Button from "../../../components/ui/Button";

const SalesHeader = () => {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        lg:flex-row
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* ================================================= */}
      {/* TITLE */}
      {/* ================================================= */}

      <div className="min-w-0">
        <h1
          className="
            text-2xl
            font-bold
            text-slate-800
            sm:text-3xl
          "
        >
          Sales & Orders
        </h1>

        <p
          className="
            mt-1
            hidden
            text-sm
            text-slate-500
            lg:block
          "
        >
          Monitor sales performance and manage customer orders
        </p>
      </div>


      {/* ================================================= */}
      {/* ACTIONS */}
      {/* ================================================= */}

      <div
        className="
          flex
          w-full
          min-w-0
          flex-col
          gap-2
          sm:w-auto
          sm:flex-row
          sm:shrink-0
          sm:gap-3
        "
      >

        {/* Import Orders */}

        <Button variant="secondary" onClick={()=> console.log("Import orders Buttons Clicked")} >
          <Upload size={18} />
          <span>
            Import Orders
          </span>
        </Button>


        {/* New Sales Order */}

        <Button variant="primary" onClick={()=>console.log("Sales Order Button Clicked")} >
          <Plus size={18} />
          <span>
            New Sales Order
          </span>
        </Button>

      </div>
    </div>
  );
};

export default SalesHeader;