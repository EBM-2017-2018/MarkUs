module.exports = {};

module.exports.find = (req, res) => {
  res.json(req.user);
};
