'use strict'

const path = require('path');


module.exports = (app) => {
    // Serve frontend
    app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/../frontend/index.html')));

    
    // Handle an error if the endpoint doesn't exists
    app.all('*', (req, res) => res.status(404).json({
        code: 404,
        message: 'This endpoint doesn\'t exists.'
    }));
}