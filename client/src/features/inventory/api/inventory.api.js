import api from  "../../../api/axios.js";

// creates inventory item
export const createInventoryItem = async (itemData) => {
  try {
    const response = await api.post("/api/inventory/", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating inventory item:", error);
    throw error;
  }
};
// gets all inventory items

export const getInventoryItems = async () => {
    try {
        const response = await api.get("/api/inventory");
        return response.data;
    } catch (error) {
        console.error("Error fetching inventory items:", error);
        throw error;
    }
};
// gets inventory items by category

export const getInventoryItemByCategory = async (category) => {
  try {
    const response = await api.get(`/api/inventory/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching inventory items by category:", error);
    throw error;
  }
};