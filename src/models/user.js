let mongoose = require('mongoose');
let bcrypt= require('bcrypt-nodejs');

Schema = mongoose.Schema;

Festival = require('./festival');
Comment = require('./comment');

let User = new Schema({
  local: {
    email: String,
    password: String,    
  },
  avatar: String,
  visited: [Festival.schema],
  wishlist: [Festival.schema],  // TODO: not implemented
  comments: [Comment.schema],   // TODO: not implemented
});

User.methods.makeHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
