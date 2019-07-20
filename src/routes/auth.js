const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/loginUser', authController.login);
router.post('/registerUser', authController.register);

module.exports = router;