import Ledger from '../models/ledger.data.js';

export const addLedger = async(req, res) => {
  const {company, partyType} = req.body;
  console.log("Req Body :", req.body);

  if(!company || !partyType) return res.status(400).json({
    message : "Please provide all values",
    succes : false,
  });
  try{
    const newLedger = await Ledger.create(req.body);
    return res.status(201).json({
        message : "Ledger Succesfully Created",
        Ledger : newLedger,
        success : false
    })

  }catch(err){
    console.error("Error ", err);
   return res.status(500).json({
        message: "Invernal server error",
        succes : false,
        error : err
    });
  }
    
}

export const getAllLedgers = async (req, res) => {
  try{
   const ledgers = await Ledger.find();
   if(ledgers.length == 0) return res.status(404).json({
    message : "No ledgers",
    success : false
   })
   return res.status(200).json({
    message:"ledgers fetched successfully",
    data : ledgers
   });
   
  }catch(error){
    console.log(error);
    
    return res.status(500).json({
        message: "Invernal server error",
        succes : false,
        error : error,
    });

  }
}