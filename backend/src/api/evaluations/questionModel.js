const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  format: {
    type: [{
      type: String,
      enum: ['textarea', 'checkboxes'],
    }],
    default: 'textarea',
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
