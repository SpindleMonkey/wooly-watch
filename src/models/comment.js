
// TODO: not implemented

let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let CommentSchema = new Schema({
  who: String,
  festival: String,
  comment: String,
});

let Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
