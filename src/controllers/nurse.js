const model = require("../models/nurses");

const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { password, id } = req.body;

    const nurse = await model.getDataById(id);
    console.log(password, nurse.password);

    if (!nurse) throw new Error("The id is incorrect");

    if (password !== nurse.password) throw new Error("Password is incorrect");

    // const token = await jwt.sign(
    //   { nurses: nurse.id_num, id: nurse.id },
    //   process.env.JWT_SECRET
    // );

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
