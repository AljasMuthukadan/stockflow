import api from "./axios.js";

// =========================================================
// CREATE LEDGER
// =========================================================

export const createLedger = async (ledger) => {
  try {
    const response = await api.post(
      "/api/ledger",
      ledger
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error creating ledger:",
      error
    );

    throw error;
  }
};

// =========================================================
// GET ALL LEDGERS
// =========================================================

export const getLedgers = async () => {
  try {
    const response = await api.get(
      "/api/ledger"
    );

    console.log(
      "GET LEDGER RESPONSE:",
      response.data
    );

    return response.data.data;
  } catch (error) {
    console.error(
      "Failed to get ledger data:",
      error
    );

    throw error;
  }
};

// =========================================================
// UPDATE LEDGER
// =========================================================

export const updateLedgerById = async (
  ledgerId,
  updatedLedger
) => {
  try {
    const response = await api.patch(
      `/api/ledger/${ledgerId}`,
      updatedLedger
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating ledger:",
      error
    );

    throw error;
  }
};

export const deleteLedgerById = async (ledgerId) => {
  try {
    const response = await api.delete(
      `/api/ledger/${ledgerId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting ledger:",
      error
    );
    throw error;
  }
};
