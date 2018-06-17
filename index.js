/**
 * Magellan: Project Magellan is made to make self-hosting more easier and accessible for anybody by purposing alternatives solutions to thoses GAFAM companies.
 * Authors: Enowaves team <dev[at]enowaves[dot]space>
 * License: AGPL-3.0
 */

// Import dependencies
const express    = require('express'),
      bodyParser = require('body-parser'),
      logger     = require('./core/logger');

var config;


console.log(require("path").resolve(__dirname + '/../logs/do.txt'));

logger.info("saluuuut");
logger.error("doooooo")

// // Try to open config file
// try {
//     config = require('./config/config.js');
// } catch(e) { throw console.log("nope: " + e); }


// var app = express();

// app.listen(8090, () => {
//     console.log("leg");
// })