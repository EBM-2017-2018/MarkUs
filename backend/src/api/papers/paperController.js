const Paper = require('./paperModel');
const Evaluation = require('../evaluations/evaluationModel');
const { isResponsableOfPromo } = require('../../services/userPermissionsService');

module.exports = {};

module.exports.findAll = (req, res) => {
  if (req.user.role === 'admin') {
    Paper.find({}, (err, papers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(papers);
    });
  }
  return res.json({ message: 'Access Denied' });
};

module.exports.findAllByEvaluation = (req, res) => {
  let authorizedUser;
  Evaluation.findOne({ _id: req.params.id }, (err, evaluation) => {
    if (err) {
      return res.send(err);
    }

    authorizedUser = evaluation.author;
    return true;
  });
  if (req.user.role === 'administrateur' || req.user.username === authorizedUser) {
    Paper.find({ evaluationId: req.params.id }, (err, papers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(papers);
    });
  } else {
    Paper.find({
      evaluationId: req.params.id,
      author: req.user.username,
    }, (err, papers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(papers);
    });
  }
};

module.exports.findOne = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      Evaluation.findOne({ _id: paper.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.role === 'administrateur' || isResponsableOfPromo(evaluation.promo, req.user, req.header.Authorization) || paper.author === req.user.username) {
          return res.json(paper);
        }
        return res.json({ message: 'Access Denied' });
      });
      return res.json({ message: 'Couldn\'t find evaluation' });
    },
  );
};

module.exports.update = (req, res) => {
  const { responses, corrected } = req.body;
  const set = { responses };
  if (typeof (corrected) === 'boolean') {
    set.corrected = corrected;
  }
  Paper.update(
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

module.exports.create = (req, res) => {
  const paper = new Paper(req.body);
  paper.save((err) => {
    if (err) {
      return res.json(err);
    }
    return res.json(paper);
  });
};


module.exports.delete = (req, res) => {
  Paper.deleteOne(
    { _id: req.params.id },
    (err) => {
      if (err) {
        return res.json(err);
      }

      return res.json({ message: 'evaluation supprimée' });
    },
  );
};
