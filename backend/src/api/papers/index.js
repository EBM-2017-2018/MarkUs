const { Router } = require('express');

const router = new Router();

const paperController = require('./paperController');
const responseController = require('./responseController');

router.get('/', paperController.findAll);
router.get('/:id', paperController.findOne);
router.post('/', paperController.create);
router.delete('/:id', paperController.delete);

router.get('/:id/responses', responseController.findAll);
router.get('/:id/responses/:rid', responseController.findOne);
router.post('/:id/responses', responseController.create);
router.put('/:id/responses', responseController.update);
router.delete('/:id/responses/:rid', responseController.delete);

module.exports = router;
