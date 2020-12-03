const { pushNotification } = require("../models/notificationsManager");

exports.getPublicKey = (req, res) => {
  res.json({ key: process.env.PUBLIC_KEY });
};

exports.subscribe = (req, res) => {
  console.log(req.body);
  pushNotification(req.body, "this is a test");
  res.json({});
};
