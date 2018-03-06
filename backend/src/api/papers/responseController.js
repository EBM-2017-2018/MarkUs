const Paper = require('./paperModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      return res.json(paper.responses);
    },
  );
};

module.exports.findOne = (req, res) => {
  Paper.findOne(
    {
      _id: req.params.id,
      'responses._id': req.params.qid,
    },
    { 'questions.$': true },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluation.questions[0]);
    },
  );
};

module.exports.upcreate = (req, res) => {
  const { content, points, format } = req.body;
  Paper.findOneAndUpdate()(
    { _id: req.params.id },
    {
      $push: {
        questions: {
          content,
          points,
          format,
        },
      },
    },
    { runValidators: true },
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        content,
        points,
        format,
      });
    },
  );
};


module.exports.delete = (req, res) => {
  Paper.update(
    { _id: req.params.id },
    {
      $pull: {
        messages: { _id: req.params.mid },
      },
    },
    (err) => {
      if (err) {
        return res.json(err);
      }

      return res.json({ message: 'question supprimée' });
    },
  );
};
