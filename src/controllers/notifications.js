const { pushNotification } = require("../models/notificationsManager");
const { addSubscribe } = require("../models/nurses");

exports.getPublicKey = (req, res) => {
  res.json({ key: process.env.PUBLIC_KEY });
};

exports.subscribe = async (req, res) => {
  if (req.cookies.nurse_id === undefined) return;
  await addSubscribe(req.cookies.nurse_id, req.body);
  pushNotification(req.body, "this is a test");
  res.json({});
};
