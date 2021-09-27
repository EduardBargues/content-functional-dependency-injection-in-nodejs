const logger = () => {
  const info = (context, message) => console.log(`${context}: ${message}`);

  return {
    info,
  };
};

module.exports = logger;
