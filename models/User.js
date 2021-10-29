const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  card: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  family: {
    type: Boolean,
    required: true,
    default: false,
  }
});

module.exports = User = mongoose.model('users', UserSchema);
