export const createPurchaseOrder = async (req, res) => {
  try {
    const { product, quantity, supplier } = req.body;

    // Validate required fields
    if (!product || !quantity || !supplier) {
      return res.status(400).json({
        message: "Product, quantity, and supplier are required",
        success: false,
      });
    }

    // Create a new purchase order
    const newPurchaseOrder = new PurchaseOrder({
      product,
      quantity,
      supplier,
    });

    // Save the purchase order to the database
    const savedOrder = await newPurchaseOrder.save();

    // Populate the product and supplier fields for the response
    const populatedOrder = await savedOrder.populate("product").populate("supplier").execPopulate();

    return res.status(201).json({
      message: "Purchase order created successfully",
      data: populatedOrder,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create purchase order",
      error: error.message,
      success: false,
    });
  }
};

export const getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find()
      .populate("product")
      .populate("supplier");

    return res.status(200).json({
      message: "Purchase orders retrieved successfully",
      data: purchaseOrders,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve purchase orders",
      error: error.message,
      success: false,
    });
  }
};  
