const repository = (log, dbConf) => {
  const getUserFromDb = (userName) => {
    log.info("repository", `using dbconf ${dbConf.connectionString}`);
    log.info("repository", `get-user ${userName}`);

    return {
      name: userName,
      email: `${userName}@gmail.com`,
    };
  };

  return {
    getUserFromDb,
  };
};

module.exports = repository;
