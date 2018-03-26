const Paper = require('./paperModel');

module.exports = {};

module.exports.findByQuestion = (req, res) => {
  Paper.find({ evaluationId: req.params.id }, (err, papers) => {
    const responses = [];
    if (err) {
      return res.send(err);
    }
    papers.forEach((paper) => {
      responses.push(paper.responses(paper.responses.find(req.params.qid)));
    });
    return res.json(responses);
  });
};

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
      'responses._id': req.params.rid,
    },
    { 'responses.$': true },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      return res.json(paper.responses[0]);
    },
  );
};

module.exports.create = (req, res) => {
  const { content, questionId } = req.body;
  Paper.findOneAndUpdate()(
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
    (err) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        content,
        questionId,
      });
    },
  );
};

module.exports.update = (req, res) => {
  const { content, feedbackId } = req.body;
  const set = {};
  if (typeof (content) === 'string') {
    set.content = content;
  }
  if (typeof (feedbackId) === 'string') {
    set.feedbackId = feedbackId;
  }
  Paper.update(
    {
      _id: req.params.id,
      'responses._id': req.params.rid,
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
  Paper.update(
    { _id: req.params.id },
    {
      $pull: {
        responses: { _id: req.params.rid },
      },
    },
    (err) => {
      if (err) {
        return res.json(err);
      }

      return res.json({ message: 'réponse supprimée' });
    },
  );
};
