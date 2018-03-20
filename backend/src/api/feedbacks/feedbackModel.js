const mongoose = require('mongoose');

const { Schema } = mongoose;

const FeedbackSchema = new Schema({
  evaluationId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  questionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
