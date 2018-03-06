const { Router } = require('express');

const router = new Router();

const evaluationController = require('./evaluationController');
const questionController = require('./questionController');

router.get('/', evaluationController.findAll);
router.get('/:id', evaluationController.findOne);
router.post('/', evaluationController.create);
router.delete('/:id', evaluationController.delete);

router.get('/:id/questions', questionController.findAll);
router.get('/:id/questions/:qid', questionController.findOne);
router.post('/:id/questions', questionController.create);
router.delete('/:id/questions/:qid', questionController.delete);


module.exports = router;
