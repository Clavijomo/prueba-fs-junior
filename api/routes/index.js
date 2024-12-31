const express = require('express');

const movieRouter = require('./movie.js');

function routerAPI(app) {
    const router = express.Router();

    app.use('/api/v1', router);
    router.use('/movies', movieRouter);
}

module.exports = routerAPI;