const winston = require('winston');

module.exports = function (err, req, res, next) {
    winston.error(err.message, err)
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        err
    });
}