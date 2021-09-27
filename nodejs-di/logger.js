class Logger {
  constructor() {}

  log(context, message) {
    console.log(`${context}: ${message}`);
  }
}

module.exports = Logger;
