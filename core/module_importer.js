'use strict';

const fs = require('fs');
const logger = require('./logger')(); 

/**
 * Automatique module importation function
 * @param {object} app 
 */
module.exports = app => {
    // Read each module in /modules folder
    fs.readdir(__dirname + '/../modules', (err, items) => {
        if (err) throw err;

        // If the module directory is not empty
        if (items.length) {
            items.forEach(item => {
                try {
                    // Try to import the module into app
                    app.use(`/modules/${item}`, require(`../modules/${item}/index`));
                } catch {
                    logger.log('warn', `"module_importer.js" could not import index.js from ${item} module. Maybe the index.js file is missing or the router is not correctly exported from this file.`);
                }
            })
        } else {
            logger.log('warn', '"module_importer.js" the module directory is empty.');
        }
    })
}