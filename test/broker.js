'use strict'

global.test_env = true; // Declare is using tests environment

const assert    = require('assert'),
      util      = require('util'),
      amqp      = require('../core/broker'),
      path      = require('path'),
      tmpFolder = path.resolve(__dirname + '/../tests-tmp');


      
      
describe('Test AMQP methods', () => {
    describe('#initConnection', () => {
        it('should return an AMQP instance (connection informations with config file)', (done) => {
            amqp.initConnection().then((conn) => {
                conn.close();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        
        it('should return an error (connection informations with env variables)', (done) => {
            process.env.BROKER_HOST = "127.1.1.1";
            process.env.BROKER_PORT = 5673;

            amqp.initConnection().then((conn) => {
                conn.close();
                done(new Error('The AMQP broker have responded and is should not.'));
            }).catch((err) => {
                done();
            });
        });


        it('should return status after sending a message', (done) => {
            process.env.BROKER_HOST = undefined;
            process.env.BROKER_PORT = undefined;

            amqp.initConnection().then((conn) => {
                conn.sendData("leg", "daootooatoatotao").then(status => {
                    conn.close();
                    done();
                }).catch(errO => {
                    conn.close();
                    done(errO);                    
                });
            }).catch((err) => {
                done(err);
            });
        });


        it('should receive messages on the task queue', (done) => {
            done();
        });
    });
});