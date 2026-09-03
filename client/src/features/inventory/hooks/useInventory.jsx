import { useCallback, useEffect, useState } from "react";

import {
  getInventoryItems,
  createInventoryItem,
} from "../api/inventory.api.js";


const useInventory = () => {

  const [inventory, setInventory] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // Fetch Inventory

  const fetchInventory = useCallback(async () => {

    try {

      setLoading(true);
      setError(null);

      const response = await getInventoryItems();

      setInventory(response.data);

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Failed to fetch inventory items";

      setError(message);

    } finally {

      setLoading(false);

    }

  }, []);


  // Fetch on mount

  useEffect(() => {

    fetchInventory();

  }, [fetchInventory]);


  // Add Inventory Item

  const addInventoryItem = async (itemData) => {

    try {

      setError(null);

      const response = await createInventoryItem(itemData);


      setInventory((previousInventory) => [
        ...previousInventory,
        response.data,
      ]);


      return response.data;

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Failed to add inventory item";

      setError(message);

      throw error;

    }

  };


  return {

    inventory,

    loading,

    error,

    fetchInventory,

    addInventoryItem,

  };

};


export default useInventory;