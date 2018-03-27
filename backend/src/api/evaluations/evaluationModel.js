const mongoose = require('mongoose');


const { Schema } = mongoose;

const QuestionSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    enum: ['textarea', 'checkboxes'],
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
  promo: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  questions: [QuestionSchema],
  published: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Evaluation', EvaluationSchema);
