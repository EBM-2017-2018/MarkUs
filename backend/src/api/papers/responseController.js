const Paper = require('./paperModel');
const Evaluation = require('../evaluations/evaluationModel');

module.exports = {};

module.exports.findByQuestion = (req, res) => {
  Evaluation.findOne({ _id: req.params.id }, (error, evaluation) => {
    if (error) {
      return res.send(error);
    }
    if (evaluation.author === req.user.username || req.user.role === 'administrateur') {
      return Paper.find({ evaluationId: req.params.id }, (err, papers) => {
        const responses = [];
        if (err) {
          return res.send(err);
        }
        papers.forEach((paper) => {
          responses.push({
            // eslint-disable-next-line
            paperId: paper._id,
            answers: paper.responses.find(response => `${response.questionId}` === `${req.params.qid}`),
          });
        });
        return res.json(responses);
      });
    }
    return res.json({ message: 'Access Denied' });
  });
};

module.exports.findAll = (req, res) => {
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
        if (req.user.username === paper.author || req.user.username === evaluation.author) {
          return res.json(paper.responses);
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};

module.exports.findOne = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paperToCheck) => {
      if (err) {
        return res.send(err);
      }
      return Evaluation.findOne({ _id: paperToCheck.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.username === paperToCheck.author || req.user.username === evaluation.author) {
          return Paper.findOne(
            {
              _id: req.params.id,
              'responses._id': req.params.rid,
            },
            { 'responses.$': true },
            (err1, paper) => {
              if (err1) {
                return res.send(err1);
              }
              return res.json(paper.responses[0]);
            },
          );
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};

module.exports.create = (req, res) => {
  const { content, questionId } = req.body;
  Paper.findOne(
    { _id: req.params.id },
    (err, paperToCheck) => {
      if (err) {
        return res.send(err);
      }
      return Evaluation.findOne({ _id: paperToCheck.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.username === paperToCheck.author || req.user.username === evaluation.author) {
          return Paper.findOneAndUpdate()(
            { _id: req.params.id },
            {
              $push: {
                responses: {
                  content,
                  questionId,
                },
              },
            },
            { runValidators: true },
            (err1) => {
              if (err1) {
                return res.json(err1);
              }
              return res.json({
                content,
                questionId,
              });
            },
          );
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};

module.exports.update = (req, res) => {
  const { content, feedbackId } = req.body;
  const set = {};
  if (typeof (content) === 'string') {
    set['responses.$.content'] = content;
  }
  if (typeof (feedbackId) === 'string') {
    set['responses.$.feedbackId'] = feedbackId;
  }
  Paper.findOne(
    { _id: req.params.id },
    (err, paperToCheck) => {
      if (err) {
        return res.send(err);
      }
      return Evaluation.findOne({ _id: paperToCheck.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.username === paperToCheck.author || req.user.username === evaluation.author) {
          return Paper.update(
            {
              _id: req.params.id,
              'responses._id': req.params.rid,
            },
            {
              $set: set,
            },
            { multi: true },
            (err1) => {
              if (err1) {
                return res.json(err1);
              }
              return res.json({ message: 'Cisse code avec les pieds' });
            },
          );
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};


module.exports.delete = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paperToCheck) => {
      if (err) {
        return res.send(err);
      }
      return Evaluation.findOne({ _id: paperToCheck.evaluationId }, (error, evaluation) => {
        if (error) {
          return res.send(error);
        }
        if (req.user.username === paperToCheck.author || req.user.username === evaluation.author) {
          return Paper.update(
            { _id: req.params.id },
            {
              $pull: {
                responses: { _id: req.params.rid },
              },
            },
            (err1) => {
              if (err1) {
                return res.json(err1);
              }

              return res.json({ message: 'réponse supprimée' });
            },
          );
        }
        return res.json({ message: 'Access Denied' });
      });
    },
  );
};
