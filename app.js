const express = require('express');
require('express-async-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();



// Uncaught exceptions
process.on('uncaughtException', (ex) => { console.log(ex.message, ex); process.exit(1); });
// Uncaught exceptions
process.on('unhandledRejection', (ex) => { console.log(ex.message, ex); process.exit(1); });


// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((err, req, res, next) => {
    res.status(500).json('Something failed..');
});

// Bootstrap 
require('./src/bootstrap/db.js')();
// Routes
require('./src/routes/index.js')(app);


module.exports = app;
