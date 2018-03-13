const Evaluation = require('./evaluationModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  Evaluation.find({}, (err, evaluations) => {
    if (err) {
      return res.send(err);
    }
    return res.json(evaluations);
  });
};

module.exports.findOne = (req, res) => {
  Evaluation.findOne(
    { _id: req.params.id },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluation);
    },
  );
};

module.exports.create = (req, res) => {
  const evaluation = new Evaluation(req.body);
  evaluation.save((err) => {
    if (err) {
      return res.json(err);
    }
    return res.json(evaluation);
  });
};

module.exports.update = (req, res) => {
  const {
    name,
    published,
    questions,
    groupClass,
  } = req.body;
  const set = {};
  if (typeof (name) === 'string') {
    set.name = name;
  }
  if (typeof (groupClass) === 'string') {
    set.groupClass = groupClass;
  }
  if (typeof (published) === 'boolean') {
    set.published = published;
  }
  if (typeof (questions) === 'object') {
    set.questions = questions;
  }
  Evaluation.update(
    {
      _id: req.params.id,
    },
    {
      $set: set,
    },
    { multi: true },
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.end();
    },
  );
};

module.exports.delete = (req, res) => {
  Evaluation.deleteOne(
    { _id: req.params.id },
    (err) => {
      if (err) {
        return res.json(err);
      }

      return res.json({ message: 'evaluation supprimée' });
    },
  );
};
