const { Router } = require('express');

const router = new Router();

const paperController = require('./paperController');
const responseController = require('./responseController');

router.get('/', paperController.findAll);
router.get('/:id', paperController.findOne);
router.post('/', paperController.create);
router.delete('/:id', paperController.delete);

router.get('/:id/questions', responseController.findAll);
router.get('/:id/questions/:qid', responseController.findOne);
router.post('/:id/questions', responseController.create);
router.delete('/:id/questions/:qid', responseController.delete);


module.exports = router;
