const express = require("express");
const router = express.Router();

// "/user/signup"
router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));
router.get("/profile/:id", require("./userProfileGET"));
router.put("/:id", require("./userUpdatePUT"));

module.exports = router;
