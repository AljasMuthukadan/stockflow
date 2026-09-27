import Ledger from '../models/ledger.data';

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
        succes : false
    });
  }
    
}