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
      queryClient.invalidateQueries({
        queryKey: INVENTORY_QUERY_KEY,
      });
    },
  });

  const addInventoryItem = async (itemData) => {
    const response = await createMutation.mutateAsync(itemData);

    return response.data;
  };

  // =========================================================
  // UPDATE INVENTORY ITEM
  // =========================================================

  const updateMutation = useMutation({
    mutationFn: async ({ itemId, updatedData }) => {
      const response = await updateInventoryItem(
        itemId,
        updatedData
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: INVENTORY_QUERY_KEY,
      });
    },
  });

  const updateInventoryItemById = (
    itemId,
    updatedData
  ) => {
    return updateMutation.mutateAsync({
      itemId,
      updatedData,
    });
  };

  // =========================================================
  // ERROR
  // =========================================================

  const error =
    queryError?.response?.data?.message ||
    createMutation.error?.response?.data?.message ||
    updateMutation.error?.response?.data?.message ||
    null;

  // =========================================================
  // RETURN
  // =========================================================

  return {
    inventory,
    loading,
    error,

    fetchInventory,

    addInventoryItem,
    updateInventoryItemById,

    isAdding: createMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};

export default useInventory;