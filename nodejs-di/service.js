class Service {
  constructor(repository, emailSender, logger) {
    this.repository = repository;
    this.emailSender = emailSender;
    this.logger = logger;
  }

  getUser(userName) {
    this.logger.log("service", `get-user ${userName}`);
    let user = this.repository.getUser(userName);
    this.emailSender.sendWelcomeEmail(user.email);

    return user;
  }
}

module.exports = Service;
