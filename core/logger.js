'use strict';

const winston = require('winston'),
	  moment  = require('moment'),
	  fs      = require('fs'),
	  mkdirp  = require('mkdirp'),
	  path    = require('path');


// Initialize Winston
const logger  = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.printf((info) => {
			return `[${info.timestamp}][${info.level}] ${info.message}`;
		})
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: path.resolve(__dirname + `/../logs/${new moment().format('YYYYMMDD')}-magellan-errors.log`), level: 'error' }),
		new winston.transports.File({ filename: path.resolve(__dirname + `/../logs/${new moment().format('YYYYMMDD')}-magellan.log`) })
	]
});


module.exports = () => {
	var logsPath;

	if(global.test_env) logsPath = path.resolve(__dirname + '/../tests-tmp/logs'); // Change the path for units tests
	else logsPath = path.resolve(__dirname + '/../logs'); // Store logs path

	
	// Check if the logs folder exists
	if(fs.existsSync(logsPath) == false) {
		mkdirp(logsPath, err => {
			if(err != null) {
				console.log(err)
				console.error('Unable to create logs folder. Please check if you have the permissions for this action.');
				process.exit(1);
			}
		});
	}

	return logger;
}