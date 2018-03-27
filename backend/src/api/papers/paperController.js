const Paper = require('./paperModel');
const Evaluation = require('../evaluations/evaluationModel');
const { isResponsableOfPromo, isInPromo } = require('../../services/userPermissionsService');

module.exports = {};

module.exports.findAll = (req, res) => {
  if (req.user.role === 'admin') {
    return Paper.find({}, (err, papers) => {
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
    if (req.user.role === 'administrateur' || req.user.username === authorizedUser) {
      Paper.find({ evaluationId: req.params.id }, (error, papers) => {
        if (error) {
          return res.send(error);
        }
        return res.json(papers);
      });
    } else {
      Paper.find({
        evaluationId: req.params.id,
        author: req.user.username,
      }, (error, papers) => {
        if (error) {
          return res.send(error);
        }
        return res.json(papers);
      });
    }
    return res.json({ message: 'Access Denied' });
  });
};

module.exports.findOne = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      return Evaluation.findOne({ _id: paper.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.role === 'administrateur' || isResponsableOfPromo(evaluation.promo, req.user, req.headers.authorization) || paper.author === req.user.username) {
          return res.json(paper);
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};

module.exports.update = (req, res) => {
  Paper.findOne({ _id: req.params.id }, (err, paper) => {
    if (err) {
      return res.send(err);
    }
    return Evaluation.findOne({ _id: paper.evaluationId }, (err1, evaluation) => {
      if (err1) {
        res.send(err1);
      }
      if (evaluation.author === req.user.username || paper.author === req.user.username) {
        const { responses, corrected } = req.body;
        const set = {};
        if (typeof (responses) === 'object') {
          set.responses = responses;
        }
        if (typeof (corrected) === 'boolean') {
          set.corrected = corrected;
        }
        return Paper.update(
          {
            _id: req.params.id,
          },
          {
            $set: set,
          },
          { multi: true },
          (error) => {
            if (error) {
              return res.json(error);
            }
            return res.end();
          },
        );
      }
      return res.json({ message: 'Access Denied' });
    });
  });
};

module.exports.create = (req, res) => {
  const paper = new Paper(req.body);
  Evaluation.findOne({ _id: paper.evaluationId }, (error, evaluation) => {
    if (error) {
      return res.send(error);
    }
    if (req.user.role === 'administrateur' || req.user.username === evaluation.author || (evaluation.published && isInPromo(evaluation.promo, req.user, req.headers.authorization))) {
      return paper.save((err) => {
        if (err) {
          return res.json(err);
        }
        return res.json(paper);
      });
    }
    return res.json({ message: 'Access Denied' });
  });
};


module.exports.delete = (req, res) => {
  Paper.findOne({ _id: req.params.id }, (error, paper) => {
    if (error) {
      return res.send(error);
    }
    return Evaluation.findOne({ _id: paper.evaluationId }, (err1, evaluation) => {
      if (err1) {
        res.send(err1);
      }
      if (req.user.role === 'administrateur' || req.user.username === evaluation.author) {
        return Paper.deleteOne(
          { _id: req.params.id },
          (err) => {
            if (err) {
              return res.json(err);
            }

            return res.json({ message: 'evaluation supprimée' });
          },
        );
      }
      return res.json({ message: 'Access Denied' });
    });
  });
};


module.exports.findByUser = (req, res) => {
  Paper.findOne(
    {
      evaluationId: req.params.eid,
      author: req.user.username,
    },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      if (paper) {
        Evaluation.findOne({ _id: paper.evaluationId }, (error, evaluation) => {
          if (error) {
            return res.send(error);
          }
          if (req.user.role === 'administrateur' || isResponsableOfPromo(evaluation.promo, req.user, req.headers.Authorization) || paper.author === req.user.username) {
            return res.json(paper);
          }
          return res.json({ message: 'Access Denied' });
        });
      } else {
        return false;
      }
    },
  );
};
