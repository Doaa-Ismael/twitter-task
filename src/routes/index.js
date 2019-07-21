const express = require('express');
const authRoutes = require('./auth');
const tweetsRoutes = require('./tweets');

module.exports = (app) => {
  app.use('/auth', authRoutes);
  app.use('/tweets', tweetsRoutes);
}


