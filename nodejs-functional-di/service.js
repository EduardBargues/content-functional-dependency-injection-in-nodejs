const service = (repository, emailSender, log) => {
  const getUser = (userName) => {
    log.info("service", `get-user ${userName}`);
    let user = repository.getUserFromDb(userName);
    emailSender.sendWelcomeEmail(user.email);

    return user;
  };

  return {
    getUser,
  };
};

module.exports = service;
