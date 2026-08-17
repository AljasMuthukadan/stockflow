import { productionOrders } from "../data";
import ProductionMobileCard from "./ProductionMobileCard";


const ProductionTableMobile = () => {
  return (
    <div className="block   md:hidden">
        <div
          className="
            max-h-[calc(100vh-300px)]
            space-y-3
            overflow-y-auto
            p-3
            scrollbar-none
          "
        >
          {productionOrders.map((order) => (
            <ProductionMobileCard
              key={order.id}
              order={order}
            />
          ))}
        </div>
      </div>
  )
}

export default ProductionTableMobile