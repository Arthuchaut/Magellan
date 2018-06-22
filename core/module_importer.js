'use strict';

const fs     = require('fs'),
      path   = require('path'),
      logger = require('./logger')(); 

/**
 * Modules importation method
 * @param {object} app 
 */
module.exports = (app) => {
    // Read each module in /modules folder
    fs.readdir(path.resolve(__dirname + '/../modules'), (err, items) => {
        if(err) throw err;

        // If the module directory is not empty
        if(items.length) {
            items.forEach(item => {
                try {
                    // Try to import the module into app
                    app.use(`/modules/${item}`, require(`../modules/${item}/index`));
                } catch {
                    logger.log('warn', `Unable to import "${item}" module. Maybe the index.js file is missing or is misconfigured.`);
                }
            });
        } else logger.log('warn', 'No modules are available on "modules" directory.');
    });
}