import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getInventoryItems,
  createInventoryItem,
  updateInventoryItem,
} from "../../../api/inventory.api.js";

// Query key for inventory data
const INVENTORY_QUERY_KEY = ["inventory"];

const useInventory = () => {
  const queryClient = useQueryClient();

  // =========================================================
  // GET INVENTORY
  // =========================================================

  const {
    data: inventory = [],
    isLoading: loading,
    error: queryError,
    refetch: fetchInventory,
  } = useQuery({
    queryKey: INVENTORY_QUERY_KEY,

    queryFn: async () => {
      const response = await getInventoryItems();

      return response.data;
    },
  });

  // =========================================================
  // CREATE INVENTORY ITEM
  // =========================================================

  const createMutation = useMutation({
    mutationFn: createInventoryItem,

    onSuccess: () => {
      // Tell React Query that the cached inventory
      // is no longer up to date.
      queryClient.invalidateQueries({
        queryKey: INVENTORY_QUERY_KEY,
      });
    },
  });

  // =========================================================
  // ADD INVENTORY ITEM
  // =========================================================

  const addInventoryItem = async (itemData) => {
    
      const response = await createMutation.mutateAsync(itemData);

      return response.data;
   
   
  };
  // =========================================================
  // UPDATE
  // =========================================================
   const updateMutation = useMutation({
    mutationFn: async ({ itemId, updatedData }) => {
      const response = await updateInventoryItem (itemId, updatedData);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate the inventory query to refetch the updated data
      queryClient.invalidateQueries({
        queryKey: INVENTORY_QUERY_KEY,
      });
    },  
   });

   const updateInventoryItemById = async (itemId, updatedData) => {
    try{
      const response = await updateMutation.mutateAsync({ itemId, updatedData });
      return response.data;
    }catch(error){
      console.error("Error updating inventory item:", error);
      throw error;
    }
   }

  

  // =========================================================
  // ERROR
  // =========================================================

  const error =
    queryError?.response?.data?.message ||
    createMutation.error?.response?.data?.message ||
    null;

  return {
    inventory,
    loading,
    error,

    fetchInventory,

    addInventoryItem,
    updateInventoryItemById,
    // Useful later
    isAdding: createMutation.isPending,
  };
};

export default useInventory;