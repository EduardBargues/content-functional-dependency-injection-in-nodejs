const Logger = require("./logger");
const Repository = require("./repository");
const EmailSender = require("./emailSender");
const Service = require("./service");

class Api {
  constructor() {
    const logger = new Logger();
    const dbConf = { connectionString: "connection-string" };
    const dbClient = new Repository(dbConf, logger);
    const emailClient = new EmailSender(logger);
    const userService = new Service(dbClient, emailClient, logger);

    this.userService = userService;
    this.logger = logger;
  }

  getUser = (request, response) => {
    this.logger.log("api", "get-user");
    let user = this.userService.getUser("eduard");
    response.json(user);
  };
}

module.exports = Api;
