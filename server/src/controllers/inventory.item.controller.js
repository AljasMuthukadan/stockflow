import InventoryItem from "../models/Inventory.Item.js";

// Create a new inventory item Fn
export const createInventoryItem = async (req, res) => {
  // POST /api/inventory
  console.log("Request body:", req.body); // Log the request body for debugging
  const { name, quantity, category, itemType, unit } = req.body;
  if (!name  || !itemType ||!category ||!unit || quantity === undefined ) {
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
    console.log("New inventory item created:", newItem); // Log the newly created item for debugging
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
// Get all inventory items Fn
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

// Get inventory items by category Fn
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

// Get inventory item by ID Fn
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
// Update inventory item by ID Fn

export const updateInventoryItem = async (req, res) => {
  // PATCH /api/inventory/:id
  const { id } = req.params;
  try{
    const item = await InventoryItem.findByIdAndUpdate(id, req.body, { new: true });
    if(!item) return res.status(404).json({
       succes: false,
       message : "Inventory Item Not Found"
    })
    return res.status(200).json({
      success: true,
      message: "Inventory item updated successfully",
      data: item,
    });

  }catch(err){
    console.error("Error updating inventory item:", err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the inventory item",
    });
  }
};

export const deleteInventoryItem = async (req, res) => {
  // DELETE /api/inventory/:id
  const { id } = req.params;
  try{
    const item = await InventoryItem.findByIdAndDelete(id);
    if(!item) return res.status(404).json({
      succes: false,
      message : "Inventory Item Not Found"
   })
   return res.status(200).json({
     success: true,
     message: "Inventory item deleted successfully",
     data: item,
   });

  }catch(err){
    console.log("Error deleting inventory item:", err);
    return res.status(500).json({
      succes:false,
      message:"An error occurred while deleting the inventory item"
    });
  }
};
