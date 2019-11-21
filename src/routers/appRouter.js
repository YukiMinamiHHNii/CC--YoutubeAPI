const express = require("express"),
	router = express.Router(),
	appController= require("../controllers/appController");

router.get("/channel", appController.getChannelInfo);

router.get("/video", appController.getVideoInfo);

module.exports = router;
