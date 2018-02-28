const { Router } = require('express');
const router = new Router();

const evaluationController = require('./evaluationController');

router.get('/', evaluationController.findAll);
router.get('/:id', evaluationController.findOne);
router.post('/', evaluationController.create);
router.delete('/:id', evaluationController.delete);

module.exports = router;
