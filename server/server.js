const express = require('express');
const winston = require('winston');
// const dotenv = require('dotenv');
const server = express();

// dotenv.config({ path: 'config/config.env' });

require('./start/logging')();
require('./start/routes')(server);

const port = process.env.PORT || 4000
server.listen(port, () => winston.info(`Server is working on http://localhost:${port}`));
