const db = require("../models");
const transporter = require('../commons/send.email');
const nodemailer = require('nodemailer');

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}


const mailOptions = {
    from: 'joybhatta1000@gmail.com',
    to: 'joybhatta1000@gmail.com',
    subject: 'OTP to login',
    text: `OTP is ${between(1000, 9999)}`
};

// Sending otp to the customer email
exports.sendOTP = async (req, res) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json(error);
        } else {
            res.json(info.response);
        }
    });
}