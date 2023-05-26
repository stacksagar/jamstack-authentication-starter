const SendEmailWithCpanelCredential = require("../email/SendEmailWithCpanelCredential");

class Mail_controllers {
  async testing(req, res) {
    try {
      await SendEmailWithCpanelCredential(
        req?.body?.email,
        "Testing Mail...",
        `<h1 style="color:green; padding:10px;">Connection is ok!</h1>`
      );

      res.json({
        message: "successfully sent!",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Mail_controllers();
