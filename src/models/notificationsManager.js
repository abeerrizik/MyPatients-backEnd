var webPush = require("web-push");

var options = {
  vapidDetails: {
    subject: "mailto:moris.rafol@gmail.com",
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  },
};

exports.pushNotification = (user, text) => {
  return webPush.sendNotification(user, JSON.stringify({ text }), options);
};
