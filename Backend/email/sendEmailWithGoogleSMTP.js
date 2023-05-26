const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: process.env.GOOGLE_SMTP_USER,
    pass: process.env.GOOGLE_SMTP_PASS,
  },
});

const sendEmailWithGoogleSMTP = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: process.env.GOOGLE_SMTP_USER,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.log("Email Send ERROR :", error?.message);
  }
};

module.exports = sendEmailWithGoogleSMTP;
