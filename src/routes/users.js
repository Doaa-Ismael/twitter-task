var express = require('express');
const usersController = require('./../controllers/users.js');

var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersController.register);
router.post('/login', usersController.login);

module.exports = router;
