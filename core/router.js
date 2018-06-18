'use strict'

const path = require('path');


module.exports = (app) => {
    // Serve frontend
    app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/../frontend/index.html')));
}