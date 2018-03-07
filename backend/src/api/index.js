const { Router } = require('express');
const mongoose = require('mongoose');

const router = new Router();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// router.get('/', (req, res) => res.send('Hello, World!'));

// router.get('/:name', (req, res) => res.send(`Hello, ${req.params.name}!`));

router.use('/evaluations', require('./evaluations'));
router.use('/papers', require('./papers'));

module.exports = router;
