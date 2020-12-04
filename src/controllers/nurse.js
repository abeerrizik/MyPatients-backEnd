const model = require("../models/nurses");

exports.getNurseData = async (req,res)=>{
    const data = await model.getDataById(req.cookies.nurse_id)
    res.json(data);
}

exports.getSchedule = async (req,res) =>{

    const data = await model.getNurseSchedule(req.cookies.nurse_id)
    res.json(data);

}
