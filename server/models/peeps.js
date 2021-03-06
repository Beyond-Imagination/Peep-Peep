const mongoose = require('mongoose');

const peepSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    visibility: { type: Number, default: 1 },
},
{
  timestamps: true
});

const Peep = mongoose.model('Peep', peepSchema);

module.exports = Peep;
