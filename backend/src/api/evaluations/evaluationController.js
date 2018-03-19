const Evaluation = require('./evaluationModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  if (req.user.role === 'administrateur' || req.user.role === 'intervenant') {
    Evaluation.find({}, (err, evaluations) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluations);
    });
  } else {
    Evaluation.find({ published: true }, (err, evaluations) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluations);
    });
  }
};

module.exports.findOne = (req, res) => {
  Evaluation.findOne(
    { _id: req.params.id },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      if (req.user.role === 'administrateur' || req.user.role === 'intervenant' || evaluation.published) {
        return res.json(evaluation);
      }
      return res.json({ message: 'Access Denied' });
    },
  );
};

module.exports.create = (req, res) => {
  const evaluation = new Evaluation(req.body);
  console.log(req.user);
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
    return evaluation.save((err) => {
      if (err) {
        return res.json(err);
      }
      return res.json(evaluation);
    });
  }
  return res.json({ message: 'Access Denied' });
};

module.exports.update = (req, res) => {
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
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
    return Evaluation.update(
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
        return res.json({ update: 'done' });
      },
    );
  }
  return res.json({ message: 'Access Denied' });
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
