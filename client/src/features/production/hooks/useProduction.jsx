import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProductionOrder, getProductionOrders, deleteProductionOrder, updateProductionOrder } from "../../../api/production.api.js";
const PRODUCTION_QUERY_KEY = ["order"];

const useProduction = () => {
 const queryClient = useQueryClient();
  {
    /** GETS PRODUCTION ORDERS */
  }

  const {
    data: order = [],
    isLoading: loading,
    isError: error,
    refetch: fetchOrders,
  } = useQuery({
    queryKey: PRODUCTION_QUERY_KEY,
    queryFn: getProductionOrders,
  });
  
  {/** CREATE PRODUCTION ORDER */}
   const createMutation = useMutation({
    mutationFn: createProductionOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PRODUCTION_QUERY_KEY,
      });
    }
   });
   const addProductionOrder = async (orderData) => {
    return await createMutation.mutateAsync(orderData);
   }
  {/** UPDATE PRODUCTION ORDER */}
  const updateMutation = useMutation({
    mutationFn: ({ orderId, updateData }) =>
      updateProductionOrder(orderId, updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PRODUCTION_QUERY_KEY,
      });
    },
  });

  const updateOrder = async (orderId, updateData) => {
    return await updateMutation.mutateAsync({ orderId, updateData });
  };

  {/** DELETE PRODUCTION ORDER */}
  const deleteMutation = useMutation({
    mutationFn: (orderId) => deleteProductionOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PRODUCTION_QUERY_KEY,
      });
    },
  });

  const deleteOrder = async (orderId) => {
    return await deleteMutation.mutateAsync(orderId);
  };


return {
  order,
  loading,
  error ,
  fetchOrders,
  addProductionOrder,
  updateOrder,
  deleteOrder
};
}

export default useProduction;
