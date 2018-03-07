const { Router } = require('express');

const router = new Router();

const evaluationController = require('./evaluationController');
const questionController = require('./questionController');
const paperController = require('../papers/paperController');

/**
 * @api {get} /evaluations Récupère la liste de toutes les évaluations
 * @apiName GetEvaluations
 * @apiGroup Evaluations
 * @apiDescription Cette URL renvoit un JSON contenant toutes les évaluations créées.
 *
 * Les informations requises actuellement est juste le champs "name" de l'évaluations.
 * @apiSuccessExample {html} Success-Response:
 *     H[
 {
     "date": "2018-03-07T13:31:24.528Z",
     "questions": [],
     "_id": "5a9fe9ac7dce47135f250cac",
     "name": "Evaluation 1",
     "__v": 0
 },
 {
     "date": "2018-03-07T13:31:29.728Z",
     "questions": [],
     "_id": "5a9fe9b17dce47135f250cad",
     "name": "Evaluation 2",
     "__v": 0
 }
 ]
 */
router.get('/', evaluationController.findAll);
router.get('/:id', evaluationController.findOne);
router.post('/', evaluationController.create);
router.delete('/:id', evaluationController.delete);

router.get('/:id/questions', questionController.findAll);
router.get('/:id/questions/:qid', questionController.findOne);
router.post('/:id/questions', questionController.create);
router.delete('/:id/questions/:qid', questionController.delete);

router.get('/:id/papers', paperController.findAllByEvaluation);

module.exports = router;
