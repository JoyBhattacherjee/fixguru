module.exports = app => {
    const authentication = require("../controllers/auth.controller.js");

    const router = require("express").Router();

    // Sending OTP to customer email
    router.post("/sendOTP", authentication.sendOTP);

    app.use('/api/v1/auth', router);
};