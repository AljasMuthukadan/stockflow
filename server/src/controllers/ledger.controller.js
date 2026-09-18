import mongoose from 'mongoose'


export const addLedger = async (req, res)=> {
    console.log(req.body)
    const {name,type}  = req.body;
    if(!name || !type){
        res.status(400).json({
            message:"Please Fill all data",
            succes:false

        });
    }
    console.log("Success")


}