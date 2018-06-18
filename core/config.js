const path   = require('path'),
      logger = require('./logger')();


try {
    module.exports = require(path.resolve(__dirname + '/../config/config'));
} catch(e) {
    logger.error('Unable to open config file. Traces:\n\t ' + e);
    process.exit(1);
}