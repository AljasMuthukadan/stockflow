import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getInventoryItems,
  createInventoryItem,
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

    // Useful later
    isAdding: createMutation.isPending,
  };
};

export default useInventory;