import mongoose from 'mongoose'

const ProductionOrderSchemma = new mongoose.schemma({
  product : {
    required : true,
    type : String
  },
  stock : {
    required : true,
    type : String
  },

})

const ProductionOrder = mongoose.model("ProductionOrder", ProductionOrderSchemma);

export default ProductionOrder;