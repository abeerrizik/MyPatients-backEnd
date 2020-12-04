const model = require("../models/nurses");

exports.login = async (req, res) => {
  try {
    const { password, id } = req.body;

    const nurse = await model.getDataByIdNum(id);
    console.log(nurse.notification.keys);

    if (!nurse) throw new Error("The id is incorrect");

    if (password !== nurse.password) throw new Error("Password is incorrect");

    res.cookie("nurse_id", nurse.id);
    res.json({
      message: "Logged successfully",
      data_id: nurse.id,
      code: 200,
    });
  } catch ({ message }) {
    return res.status(200).json({ message });
  }
};
