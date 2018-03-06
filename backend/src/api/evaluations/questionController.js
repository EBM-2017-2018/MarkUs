const Evaluation = require('./evaluationModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  Evaluation.findOne(
    { _id: req.params.id },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluation.questions);
    },
  );
};

module.exports.findOne = (req, res) => {
  Evaluation.findOne(
    {
      _id: req.params.id,
      'questions._id': req.params.qid,
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

module.exports.create = (req, res) => {
  const { content, points, format } = req.body;
  Evaluation.update(
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
  Evaluation.update(
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
