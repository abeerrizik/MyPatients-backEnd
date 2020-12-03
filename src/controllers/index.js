const express = require("express");
const app = require("../app");
const router = express.Router();

const nurses = require("./nurse");
const notifications = require("./notifications");

router.post("/login", nurses.login);
router.get("/notifications/key", notifications.getPublicKey);
router.post("/notifications", notifications.subscribe);

module.exports = router;
