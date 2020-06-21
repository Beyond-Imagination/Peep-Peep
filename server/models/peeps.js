const mongoose = require('mongoose');

const peepSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    postedBy: mongoose.Schema.Types.ObjectId,
    content: String,
    visibility: { type: Number, default: 1 },
},
{
  timestamps: true
});

const Peep = mongoose.model('Peep', peepSchema);

module.exports = Peep;
