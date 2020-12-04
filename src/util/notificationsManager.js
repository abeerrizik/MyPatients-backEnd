const webPush = require("web-push");

const options = {
    vapidDetails: {
        subject: "mailto:moris.rafol@gmail.com",
        publicKey: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
    },
};

exports.pushNotification = (subscription, text, data) => {
    if (subscription)
        webPush.sendNotification(subscription, JSON.stringify({text, ...data}), options);
};
