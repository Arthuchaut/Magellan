'use strict'

const Sequelize = require('sequelize');

/**
 * ntp_servers model
 */
const Server = Sequelize.define('ntp_servers', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    host: {
        type: Sequelize.STRING(45),
        unique: true
    },
    enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    }
})


 