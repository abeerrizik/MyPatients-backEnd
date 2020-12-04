const express = require("express");
const app = require("../app");
const router = express.Router();

const nurses = require("./nurse");
const notifications = require("./notifications");
const auth = require("./auth");
const treatments = require("./treatments");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/notifications/key", notifications.getPublicKey);
router.post("/notifications", notifications.subscribe);

router.get("/nurse", nurses.getNurseData);

router.get("/nurse/schedule", nurses.getSchedule);
router.get("/treatment", treatments.toggleStatus);

module.exports = router;
