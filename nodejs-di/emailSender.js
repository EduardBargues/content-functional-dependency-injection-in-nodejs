class EmailSender {
  constructor(logger) {
    this.logger = logger;
  }

  sendWelcomeEmail(email) {
    this.logger.log("email-sender", `send-welcome-email ${email}`);
  }
}

module.exports = EmailSender;
