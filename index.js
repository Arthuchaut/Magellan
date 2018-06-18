/**
 * Magellan: Project Magellan is made to make self-hosting more easier and accessible for anybody by purposing alternatives solutions to thoses GAFAM companies.
 * Authors: Enowaves team <dev[at]enowaves[dot]space>
 * License: AGPL-3.0
 */

// Import dependencies
const express    = require('express'),
      bodyParser = require('body-parser'),
      logger     = require('./core/logger')();


// Try to open config file
var config = require('./core/config');


var app = express();

// app.listen(8090, () => {
//     console.log("leg");
// })