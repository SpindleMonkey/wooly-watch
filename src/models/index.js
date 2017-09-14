let mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  'mongodb://localhost/wooly-watch');

module.exports.User = require('./user.js');
module.exports.Festival = require('./festival.js');
module.exports.Comment = require('./comment.js');
