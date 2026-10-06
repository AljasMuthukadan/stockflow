

export const createProductionOrder = async(req, res) => {
    const {name} = req.body;

    if(!name) return res.status(400).json({
        message : "Please fill the requiered fields",
        success : false,
    })

    return res.status(200).json()
}