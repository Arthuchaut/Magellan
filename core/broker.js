'use strict'

const amqp   = require('amqplib'),
      logger = require('./logger')(),
      config = require('./config').broker;      


/**
 * Init the connection to AMQP broker and return an instance
 * 
 * @returns {Promise<amqp>} return AMQP instance
 * 
 */
function initConnection() {
    return new Promise((resolve, reject) => {
        // Generate connection string
        var connStr = 'amqp://';

        // If the host doesn't exist on the config file or environment variable, put default value        
        if(typeof process.env.BROKER_HOST !== 'undefined' && process.env.BROKER_HOST != 'undefined') connStr += process.env.BROKER_HOST;
        else if(typeof config.host !== 'undefined') connStr += config.host;
        
        connStr += ':'; // Add port separator
    
        // If the port doesn't exist on the config file or environment variable
        if(typeof process.env.BROKER_PORT !== 'undefined' && process.env.BROKER_PORT != 'undefined') connStr += process.env.BROKER_PORT;        
        else if(typeof config.port !== 'undefined') connStr += config.port;
    
    
        // Start the connection to AMQP broker
        amqp.connect(connStr).then(conn => {
            conn.sendData = sendData;
            resolve(conn);
        }).catch(err => {
            if(typeof err !== 'undefined') reject(err);
        });
    });
}


/**
 * Send data to specific queue
 * @param {String} queue 
 * @param {Object} data
 * 
 * @returns {Promise}
 */
function sendData(queue, data) {
    var conn = this;

    return new Promise((resolve, reject) => {
        conn.createChannel((errCh, ch) => {
            if(errCh) logger.error(`Unable to open a connection on ${queue} queue. Traces: \n\t${errCh}`);
            else ch.sendToQueue(queue, new Buffer(data)).then((status) => {
                resolve(status);
            }).catch(err => reject(reject));
        });
    });
}


// function listenChannel(channel) {

// }


module.exports = {
    initConnection
}