const express = require('express');
const authRoutes = require('./auth');
const tweetsRoutes = require('./tweets');

module.exports = (app) => {
  app.use('/auth', authRoutes);
  app.use('/tweets', tweetsRoutes);
  app.use((err, req, res, next) => {
    res.status(500).json('Something failed..');
});
}


