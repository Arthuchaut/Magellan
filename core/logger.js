const winston = require('winston'),
      moment  = require('moment'),
      fs      = require('fs'),
      path    = require('path');


// Check if the logs folder exists


// Initialize Winston
const logger  = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        //winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `[${info.timestamp}][${info.level}] ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.resolve(__dirname + `/../logs/${new moment().format("YYYYMMDD")}-magellan-errors.log`), level: 'error' }),
        new winston.transports.File({ filename: path.resolve(__dirname + `/../logs/${new moment().format("YYYYMMDD")}-magellan.log`) })
    ]
});

module.exports = logger;