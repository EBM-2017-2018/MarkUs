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

const EvaluationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  groupClass: {
    type: String,
  },
  questions: [QuestionSchema],
});

module.exports = mongoose.model('Evaluation', EvaluationSchema);
