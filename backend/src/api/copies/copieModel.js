const mongoose = require('mongoose');


const { Schema } = mongoose;

const ReponseSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const CopieSchema = new Schema({
  evaluationId: {
    type: ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  groupClass: {
    type: String,
  },
  questions: [ReponseSchema],
});

module.exports = mongoose.model('Copie', CopieSchema);
