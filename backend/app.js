const cors = require('cors');
const morgan = require('morgan');
const {environment} = require('./config');
const bearerToken = require('express-bearer-token');
const path = require('path');
const {ValidationError} = require('sequelize');