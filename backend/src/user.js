const mongoose = require('mongoose');


const { Schema } = mongoose;
const validator = require('validator');


const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['etudiant', 'intervenant', 'administrateur'],
    default: 'etudiant',
    required: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'invalid email'],
    required: true,
  },

});

module.exports = mongoose.model('User', UserSchema);
