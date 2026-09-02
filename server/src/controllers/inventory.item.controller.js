import InventoryItem from "../models/Inventory.Item.js";

export const createInventoryItem = async (req, res) => {
  // POST /api/inventory
  const { name, description, quantity, price, itemType, unit } = req.body;
  if (!name || !description || !itemType || !unit || quantity === undefined ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {
    // Check if an inventory item with the same name already exists
    const existingItem = await InventoryItem.findOne({ name });
    if (existingItem) {
      return res.status(400).json({
        success: false,
        message: "An inventory item with the same name already exists",
      });
    }
    // Create a new inventory item
    const newItem = await InventoryItem.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Inventory item created successfully",
      data: newItem,
    });
  } catch (error) {
    console.error("Error creating inventory item:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the inventory item",
    });
  }
};

export const getInventoryItems = async (req, res) => {
  // GET /api/inventory
  //  fetches all inventory items and returns them in the response.
  try {
    const inventoryItems = await InventoryItem.find();
    if (inventoryItems.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No inventory items found",
      });
    }
    // Retrieve all inventory items from the database
    return res.status(200).json({
      success: true,
      message: "Inventory items retrieved successfully",
      data: inventoryItems,
    });
  } catch (error) {
    console.error("Error fetching inventory items:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching inventory items",
    });
  }
}


export const getInventoryItemByCategory = async (req, res) => {
  // GET /api/inventory/category/:category
  try {
    // Retrieve inventory items by category from the database
    const { category } = req.params;
    const inventoryItems = await InventoryItem.find({ category });
    if (inventoryItems.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No inventory items found in category '${category}'`,
      });
    }
    // Return the inventory items in the response
    return res.status(200).json({
      success: true,
      message: `Inventory items in category '${category}' retrieved successfully`,
      data: inventoryItems,
    });
  } catch (error) {
    console.error("Error fetching inventory items by category:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching inventory items by category",
    });
  }
};

export const getInventoryItemById = async (req, res) => {
  // GET /api/inventory/:id
  
  try {
    const { id } = req.params;

    const inventoryItem = await InventoryItem.findById(id);

    if (!inventoryItem) {
      return res.status(404).json({
        success: false,
        message: "Inventory item not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inventory item retrieved successfully",
      data: inventoryItem,
    });
  } catch (error) {
    console.error("Error fetching inventory item:", error);

    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching the inventory item",
    });
  }
};

export const updateInventoryItem = async (req, res) => {
  // PATCH /api/inventory/:id
};

export const deleteInventoryItem = async (req, res) => {
  // DELETE /api/inventory/:id
};
