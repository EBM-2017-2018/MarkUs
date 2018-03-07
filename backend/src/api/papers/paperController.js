const Paper = require('./paperModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  Paper.find({}, (err, papers) => {
    if (err) {
      return res.send(err);
    }
    return res.json(papers);
  });
};

module.exports.findAllByEvaluation = (req, res) => {
  Paper.find({ evaluationId: req.param.id }, (err, papers) => {
    if (err) {
      return res.send(err);
    }
    return res.json(papers);
  });
};

module.exports.findOne = (req, res) => {
  Paper.findOne(
    { _id: req.params.id },
    (err, paper) => {
      if (err) {
        return res.send(err);
      }
      return res.json(paper);
    },
  );
};

module.exports.update = (req, res) => {
  const { responses, corrected } = req.body;
  Paper.update(
    {
      _id: req.params.id,
    },
    {
      $set: {
        responses,
        corrected,
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
