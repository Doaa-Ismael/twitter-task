let mongoose = require('mongoose');
let dbUri = 'mongodb://Doaa:159753159753t@ds245387.mlab.com:45387/twitter';


module.exports = function connect() {
    mongoose.connect(dbUri)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
}