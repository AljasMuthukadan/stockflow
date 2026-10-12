import mongoose from 'mongoose'

const ProductionOrderSchemma = new mongoose.schemma({
  product : {
    required : true,
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product"
  },
  stock : {
    required : true,
    type : String
  },
  batch : {
    type : String
  },
  quantity : {
    required : true,
    type : Number
  },
  expectedDate : {
    type : Date
  },
  productionDate : {
    required : true,
    type : Date
  },
  unit : {
    type : String
  },
  warehouse : {
    type : String
  },
  notes : {
    type : String
  },
  bom : {
    type : String
  },
  supervisor : {
    type : String,
    default : "Not Assigned"
  },
  status : {
    type : String,
    enum : ["Pending", "In Progress", "Completed"],
    default : "Pending"
  },
  createdAt : {
    type : Date,
    default : Date.now
  }

})

const ProductionOrder = mongoose.model("ProductionOrder", ProductionOrderSchemma);

export default ProductionOrder;

{
batch: "SP-001"
​
bom: "ice-cream-standard"
​
expectedDate: "2026-10-13"
​
id: "ASD"
​
notes: "NOTES"
​
product: "Grapes"
​
productionDate: "2026-10-12"
​
quantity: 5000
​
stock: "500 kg"
​
unit: "kg"
​
warehouse: "main-warehouse"
}