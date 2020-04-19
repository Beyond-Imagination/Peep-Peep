const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    nickname: String,
    status: { type: Number, default: 1 },
    image: String,
    followings: [mongoose.Schema.Types.ObjectId],
    followers: [mongoose.Schema.Types.ObjectId],
    posts: [mongoose.Schema.Types.ObjectId],
},
{
  timestamps: true
});

userSchema.methods.comparePassword = function(password, callback)  {
    if (this.password === password) {
        callback(null, true);
    } else {
        callback('password 불일치');
    }
};

const User = mongoose.model('User', userSchema);

export default User;
