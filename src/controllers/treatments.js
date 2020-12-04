const treatmentModule = require("../models/treatments")

exports.toggleStatus = async (req,res)=>{
    const {treatmentId , status} = req.body;
    await treatmentModule.ToggleStatus(treatmentId, status)
    res.send({})
}

exports.get = async (req,res)=>{
    const {id} = req.params;
    const data =  await treatmentModule.getTreatmentData(id)

    res.send(data)
}
