import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getLedgers,
  createLedger,
  updateLedgerById,
} from "../../../api/ledger.api.js";

const LEDGER_QUERY_KEY = ["ledger"];

const useLedger = () => {
  const queryClient = useQueryClient();

  // =========================================================
  // GET ALL LEDGERS
  // =========================================================

  const {
    data: ledger = [],
    isLoading: loading,
    error: queryError,
    refetch: fetchLedgers,
  } = useQuery({
    queryKey: LEDGER_QUERY_KEY,
    queryFn: getLedgers,
  });

  // =========================================================
  // CREATE LEDGER
  // =========================================================

  const createMutation = useMutation({
    mutationFn: createLedger,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LEDGER_QUERY_KEY,
      });
    },
  });

  const addLedger = async (ledgerData) => {
    return await createMutation.mutateAsync(
      ledgerData
    );
  };

  // =========================================================
  // UPDATE LEDGER
  // =========================================================

  const updateMutation = useMutation({
    mutationFn: ({
      ledgerId,
      updateData,
    }) =>
      updateLedgerById(
        ledgerId,
        updateData
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LEDGER_QUERY_KEY,
      });
    },
  });

  const updateLedger = async (
    ledgerId,
    updateData
  ) => {
    return await updateMutation.mutateAsync({
      ledgerId,
      updateData,
    });
  };

  // =========================================================
  // RETURN
  // =========================================================

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