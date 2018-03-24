const Evaluation = require('./evaluationModel');

module.exports = {};

module.exports.findAll = (req, res) => {
  const { role: userRole, username } = req.user;
  Evaluation.findOne(
    { _id: req.params.id },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      if (userRole === 'administrateur' || username === evaluation.author || evaluation.published) {
        return res.json(evaluation.questions);
      }
      return res.json({ message: 'Access Denied' });
    },
  );
};

module.exports.findOne = (req, res) => {
  Evaluation.findOne(
    {
      _id: req.params.id,
      'questions._id': req.params.qid,
    },
    { 'questions.$': true },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      if (req.user.role === 'administrateur' || req.user.username === 'intervant' || evaluation.published) {
        return res.json(evaluation.questions[0]);
      }
      return res.json({ message: 'Access Denied' });
    },
  );
};

module.exports.create = (req, res) => {
  const { content, points, format } = req.body;
  Evaluation.find(
    {
      _id: req.params.id,
    },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      if (req.user.role === 'administrateur' || req.user.username === evaluation.author) {
        return Evaluation.update(
          { _id: req.params.id },
          {
            $push: {
              questions: {
                content,
                points,
                format,
              },
            },
          },
          { runValidators: true },
          (error) => {
            if (error) {
              return res.json(error);
            }
            return res.json({
              content,
              points,
              format,
            });
          },
        );
      }
      return res.json({ message: 'Access Denied' });
    },
  );
};


module.exports.delete = (req, res) => {
  Evaluation.find(
    {
      _id: req.params.id,
    },
    (err, evaluation) => {
      if (err) {
        return res.send(err);
      }
      if (req.user.role === 'administrateur' || req.user.username === evaluation.author) {
        return Evaluation.update(
          { _id: req.params.id },
          {
            $pull: {
              questions: { _id: req.params.qid },
            },
          },
          (error) => {
            if (error) {
              return res.json(error);
            }

            return res.json({ message: 'question supprimée' });
          },
        );
      }
      return res.json({ message: 'Access Denied' });
    },
  );
};
