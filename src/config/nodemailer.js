
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    },
});

transporter.verify()
    .then(() => console.log(" >>>> Transporter ok ... 📧"))
    .catch((error) => console.log("error creating transporter:", error));

module.exports = transporter;
