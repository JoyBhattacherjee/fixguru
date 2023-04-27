const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joybhatta1000@gmail.com',
        pass: 'aeuycpjnrlfafgri'
    }
});

module.exports = transporter;