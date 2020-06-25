const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    nickname: String,
    status: { type: Number, default: 1 },
    image: String,
    followings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    peeps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Peep' }],
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

module.exports = User;
