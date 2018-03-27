const Evaluation = require('./evaluationModel');
const { isInPromo } = require('../../services/userPermissionsService');

module.exports = {};

module.exports.findAll = (req, res) => {
  if (req.user.role === 'administrateur') {
    return Evaluation.find({}, (err, evaluations) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluations);
    });
  }
  if (req.user.role === 'intervenant') {
    return Evaluation.find({ author: req.user.username }, (err, evaluations) => {
      if (err) {
        return res.send(err);
      }
      return res.json(evaluations);
    });
  }
  return Evaluation.find({ published: true }, (err, evaluations) => {
    if (err) {
      return res.send(err);
    }
    const evaluationsToSend = [];
    evaluations.forEach((evaluation) => {
      if (isInPromo(evaluation.promo, req.user, req.headers.authorization)) {
        evaluationsToSend.push(evaluation);
      }
    });
    return res.json(evaluationsToSend);
  });
};


module.exports.findOne = (req, res) =>
  Evaluation.findOne(
    { _id: req.params.id },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      return isInPromo(evaluation.promo, req.user, req.headers.authorization)
        .then((test) => {
          if (req.user.role === 'administrateur' || req.user.username === evaluation.author || (evaluation.published && test)) {
            return res.json(evaluation);
          }
          return res.json({ message: 'Access Denied' });
        });
    },
  );

module.exports.create = (req, res) => {
  const evaluation = new Evaluation(req.body);
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
      promo,
    } = req.body;
    const set = {};
    if (typeof (name) === 'string') {
      set.name = name;
    }
    if (typeof (promo) === 'string') {
      set.promo = promo;
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
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
    return Evaluation.deleteOne(
      {
        _id: req.params.id,
      },
      (err) => {
        if (err) {
          return res.json(err);
        }

        return res.json({ message: 'evaluation supprimée' });
      },
    );
  }
  return res.json({ message: 'Access Denied' });
};
