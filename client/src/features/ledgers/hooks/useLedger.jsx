import {
    useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import { getLedgers, createLedger, updateLedgerById } from "../../../api/ledger.api.js";

const LEDGER_QUERY_KEY = ["ledger"];

const useLedger = () => {
    const queryClient = useQueryClient();
    {/** Get all ledgers */}
  const {
    data: ledger = [],
    isLoading: loading,
    error: queryError,
    refetch: fetchLedgers,
  } = useQuery({
    queryKey: LEDGER_QUERY_KEY,

    queryFn: async () => {
      const response = await getLedgers();

      return response.data;
    },
  });
  {/** Add Ledger */}
  const createMutation = useMutation({
    mutationFn: createLedger,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LEDGER_QUERY_KEY,
      });
    },
  });
   const addLedger = async (ledgerData) => {
    const response = await createMutation.mutateAsync(ledgerData);
    return response.data;
  };

  {/** Update Ledger */}
  const updateMutation = useMutation({
    mutationFn: updateLedgerById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LEDGER_QUERY_KEY,
      });
    },
  });
  const updateLedger = async (ledgerId, updateData) => {
    const response = await updateMutation.mutateAsync({ ledgerId, updateData });
    return response.data;
  };
   
  return {
    ledger,
    loading,
    error: queryError,
    fetchLedgers,
    addLedger,
    updateLedger,
  };
};

export default useLedger;