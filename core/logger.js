const winston = require('winston'),
	  moment  = require('moment'),
	  fs      = require('fs'),
	  path    = require('path');


// Initialize Winston
const logger  = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.printf(info => {
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
	// Check if the logs folder exists
	if(fs.existsSync(path.resolve(__dirname + '/../logs')) == false) {
		fs.mkdir(path.resolve(__dirname + '/..') + '/logs', err => {
			if(err != null && err.code != 'EEXIST') {
				console.log(err, path.resolve(__dirname + '/../'));
				console.error('Unable to create logs folder. Please check if you have the permissions for this action.');
				process.exit(1);
			}
		});
	}

	return logger;
}