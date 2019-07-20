var express = require('express');
const usersController = require('./../controllers/users.js');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
