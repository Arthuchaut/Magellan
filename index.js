'use strict';

/**
 * Magellan: Project Magellan is made to make self-hosting more easier and accessible for anybody by purposing alternatives solutions to thoses GAFAM companies.
 * Authors: Enowaves team <dev[at]enowaves[dot]space>
 * License: AGPL-3.0
 */

// Import dependencies
const express        = require('express'),
      bodyParser     = require('body-parser'),
      path           = require('path'),
      logger         = require('./core/logger')();


// Try to open config file
var config = require('./core/config');
const HTTP_BIND = process.env.BIND_IP || config.webserver.bind_ip || '0.0.0.0';
const HTTP_PORT = process.env.BIND_PORT || config.webserver.bind_port || 6700;

// Initialize Express and middleware
var app = express();
app.use(bodyParser.json());
app.use('/static', express.static(path.resolve(__dirname + '/frontend/dist/assets/')));

// Import modules
require('./core/module_importer')(app);

// Import core router file
require('./core/router')(app);


// Start Web server
app.listen(HTTP_PORT, HTTP_BIND, () => logger.info(`Magellan webserver as been started on http://${HTTP_BIND}:${HTTP_PORT}.`));
