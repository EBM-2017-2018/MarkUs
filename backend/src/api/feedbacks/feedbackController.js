const Feedback = require('./feedbackModel');

module.exports = {};

module.exports.findByQuestion = (req, res) => {
  Feedback.find(
    {
      questionId: req.params.qid,
    },
    (err, feedback) => {
      if (err) {
        return res.send(err);
      }
      return res.json(feedback);
    },
  );
};

module.exports.findOne = (req, res) => {
  Feedback.findOne(
    {
      _id: req.params.id,
    },
    (err, feedback) => {
      if (err) {
        return res.send(err);
      }
      return res.json(feedback);
    },
  );
};

module.exports.create = (req, res) => {
  const feedback = new Feedback(req.body);
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
    return feedback.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(feedback);
    });
  }
  return res.json({ message: 'Access Denied' });
};

module.exports.delete = (req, res) => {
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
    return Feedback.deleteOne(
      { _id: req.params.id },
      (err) => {
        if (err) {
          return res.json(err);
        }
        return res.json({ message: 'feedback supprimé' });
      },
    );
  }
  return res.json({ message: 'Access Denied' });
};

module.exports.deleteAll = (req, res) => {
  if (req.user.role === 'intervenant' || req.user.role === 'administrateur') {
    return Feedback.remove(
      {},
      (err) => {
        if (err) {
          return res.json(err);
        }
        return res.json({ message: 'feedbacks supprimé' });
      },
    );
  }
  return res.json({ message: 'Access Denied' });
};
