var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Bootstrap 
require('./src/bootstrap/db.js')();

// Routes
require('./src/routes/index.js')(app);


module.exports = app;
