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
      status,
      productionId,
      productionDate,
      expectedDate,
      note,


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
      status,
      productionId,
      productionDate,
      expectedDate,
      note,

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

export const deleteProductionOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await ProductionOrder.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Production order not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Production order deleted successfully",
      data: deletedOrder,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete production order",
      error: error.message,
      success: false,
    });
  }
};

export const updateProduction = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)

    const {
      product,
      stock,
      quantity,
      batch,
      status,
      productionId,
      productionDate,
      expectedDate,
      note,
    } = req.body;
    console.log("Request : ", req.body);
    const updatedData = req.body;

    // 1. Validate production order ID
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid production order ID",
      });
    }



    // 3. Validate required fields
    if (quantity !== undefined && Number(quantity) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than zero",
      });
    }
    // 5. Update production order
    const updatedOrder = await ProductionOrder.findByIdAndUpdate(
      id,
      {
      quantity,
      batch,
      status,
      productionId,
      productionDate,
      expectedDate,
      note,
      stock,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("product");

    // 6. Handle missing order
    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Production order not found",
      });
    }

    // 7. Return updated order
    return res.status(200).json({
      success: true,
      message: "Production order updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update production order",
      error: error.message,
    });
  }
};