const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    postedBy: mongoose.Schema.Types.ObjectId,
    content: String,
    visibility: { type: Number, default: 1 },
},
{
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
