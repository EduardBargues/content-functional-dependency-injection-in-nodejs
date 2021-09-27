class Repository {
  constructor(dbConf, logger) {
    this.dbConf = dbConf;
    this.logger = logger;
  }

  getUser(userName) {
    this.logger.log("repository", `get-user ${userName}`);
    return {
      name: userName,
      email: `${userName}@gmail.com`,
    };
  }
}

module.exports = Repository;
