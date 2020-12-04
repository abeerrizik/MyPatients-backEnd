const treatmentModule = require("../models/treatments")

exports.toggleStatus = async (req,res)=>{
    const {treatmentId , status} = req.body;
    await treatmentModule.ToggleStatus(treatmentId, status)
    res.send({})
}
