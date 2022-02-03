const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const error = require('../middlewares/error');
const image = require('../routes/image');

module.exports = function (server) {
    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    server.use(express.json());
    server.use('/public', express.static('public'));
    server.use('/api/v1/image', image);
    server.use(error);
}
