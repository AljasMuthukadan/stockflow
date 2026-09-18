import api from "./axios.js";

// Creates ledger
export const createLedger = async(ledger) => {
  try {
    const response = await api.post("/api/ledger", ledger);

    return response.data;
  } catch (error) {
    console.error("Error creating ledger", error);
    throw error;
  }
};

// Gets all ledgers
export const getLedgers = async() => {
  try{
    const response = await api.get("/api/ledger");
    console.log("response : ", response)
    console.log("RESPONSE DATA", response.data)
    return response.data()
  }catch(error){
    console.error("Failed to get ledger data", error);
    throw error;
  }
}
// Updates Ledger By Id 

export const updateLedgerById = async(ledgerId, updatedLedger) => {
    try{
        const response = await api.patch(`/api/ledger/${ledgerId}`, updatedLedger);
        return response.data;
    }catch(error){
        console.error("Error Updating Ledger", error);
        throw error;
    }
}

