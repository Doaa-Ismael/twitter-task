const express = require('express');
require('express-async-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();



// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Bootstrap 
require('./src/bootstrap/processErrors.js')();
require('./src/bootstrap/db.js')();

// Routes
require('./src/routes/index.js')(app);


module.exports = app;
