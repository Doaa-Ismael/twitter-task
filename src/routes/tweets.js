var express = require('express');
const tweetsController = require('./../controllers/tweets.js');
const authenticate = require('./../middlewares/authenticate.js');

var router = express.Router();



router.post('/', authenticate, tweetsController.addTweet);
router.get('/', tweetsController.getTweets);


module.exports = router;