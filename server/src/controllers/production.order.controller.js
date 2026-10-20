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
      id,
      status

    } = req.body;
    

    // 1. Validate required fields
    if (!product || !quantity ||  !stock || !id) {
      return res.status(400).json({
        message: "Product, stock, quantity, and production ID are required",
      });
    }

    // 2. Validate MongoDB ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    

    // 4. Create production order
    const productionOrder = await ProductionOrder.create({
      product : id,
      stock,
      batch,
      quantity,
      status

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

export const getAllProductionOrders = async (req, res) => {
  try {
    const productionOrders = await ProductionOrder.find().populate("product");
    if (productionOrders.length === 0) {
      return res.status(404).json({
        message: "No production orders found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Production orders retrieved successfully",
      data: productionOrders,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve production orders",
      error: error.message,
      success: false,
    });
  }
};
