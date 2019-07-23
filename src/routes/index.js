const authRoutes = require('./auth');
const tweetsRoutes = require('./tweets');
const usersRoutes = require('./users');

module.exports = (app) => {
  app.use('/auth', authRoutes);
  app.use('/tweets', tweetsRoutes);
  app.use('/users', usersRoutes);
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json('Something failed..');
});
}


