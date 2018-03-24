const { Router } = require('express');

const router = new Router();

const feedbackController = require('./feedbackContoller');

router.get('/:id', feedbackController.findOne);
router.post('/', feedbackController.create);
router.delete('/:id', feedbackController.delete);

module.exports = router;
