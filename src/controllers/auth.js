const model = require("../models/nurses")
exports.login = async (req, res) => {
    try {
        const {password, id} = req.body;
        const nurse = await model.getDataByIdNum(id);

        if (!nurse) throw new Error();

        if (password !== nurse.password) throw new Error();

        res.cookie("nurse_id", nurse.id);
        res.json({
            message: "Logged successfully",
            data_id: nurse.id,
            code: 200,
        });
    } catch ({message}) {
        return res.json({message:"Incorrect Credentials",code:401});
    }
};


exports.logout = (req, res) => {
    res.clearCookie("nurse_id")
    res.end()
}



