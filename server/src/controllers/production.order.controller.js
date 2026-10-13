import mongoose from "mongoose";
import ProductionOrder from "../models/production.order.js";


export const createProductionOrder = async (req, res) => {
  console.log("Received production order data:", req.body);
  try {
    const {
      product,
      stock,
      quantity,
      batch,
    } = req.body;
    

    // 1. Validate required fields
    if (!product || !quantity ||  !stock) {
      return res.status(400).json({
        message: "Product, stock, quantity, and production date are required",
      });
    }

    // 2. Validate MongoDB ObjectId
    if (!mongoose.isValidObjectId(product)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    

    // 4. Create production order
    const productionOrder = await ProductionOrder.create({
      product,
      stock,
      batch,
      quantity,

    });

    // 5. Return the created order with product details
    const populatedOrder = await ProductionOrder.findById(
      productionOrder._id
    ).populate("product");

    return res.status(201).json({
      message: "Production order created successfully",
      data: populatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create production order",
      error: error.message,
    });
  }
};
