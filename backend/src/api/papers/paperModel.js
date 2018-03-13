const mongoose = require('mongoose');


const { Schema } = mongoose;

const ResponseSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  questionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const PaperSchema = new Schema({
  evaluationId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String, // TODO
    required: true,
  },
  responses: [ResponseSchema],
  corrected: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Paper', PaperSchema);