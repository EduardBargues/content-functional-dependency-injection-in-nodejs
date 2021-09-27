const emailSender = (log) => {
  const sendWelcomeEmail = (email) =>
    log.info("email-sender", `send-welcome-email ${email}`);

  return {
    sendWelcomeEmail,
  };
};

module.exports = emailSender;
