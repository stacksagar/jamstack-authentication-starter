const nodemailer = require("nodemailer");
const Setting = require("../models/Setting");

const SendEmailWithCpanelCredential = async (email, subject, html) => {
  try {
    const setting = await Setting.findOne({ where: { id: 1 } });

    const transporter = nodemailer.createTransport({
      host: setting?.client?.smtp_host,
      port: setting?.client?.smtp_port,
      secure: true,
      auth: {
        user: setting?.client?.smtp_user,
        pass: setting?.client?.smtp_password,
      },
    });

    let info = await transporter.sendMail({
      from: `"${setting?.client?.smtp_from}" <${setting?.client?.smtp_user}>`,
      to: email,
      subject,
      html,
    });

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = SendEmailWithCpanelCredential;
