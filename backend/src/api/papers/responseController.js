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
  const { content } = req.body;
  Paper.update(
    {
      _id: req.params.id,
      'responses._id': req.params.rid,
    },
    {
      $set: {
        'responses.$.content': content,
      },
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
