'use strict'

const Sequelize = require('sequelize');

/**
 * ntp_restrictions model
 */
const Restriction = Sequelize.define('ntp_restrictions', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    host: {
        type: Sequelize.STRING(45),
        unique: true
    },
    ignore: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    kod: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    limited: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    lowpriotrap: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    nomodify: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    noquery: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    nopeer: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    noserve: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    notrap: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    ntpport: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    version: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    },
})


 