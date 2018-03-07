const { Router } = require('express');

const router = new Router();

const evaluationController = require('./evaluationController');
const questionController = require('./questionController');
const paperController = require('../papers/paperController');

/**
 * @api {get} /evaluations Récupère la liste de toutes les évaluations
 * @apiName GetEvaluations
 * @apiGroup Evaluations
 * @apiDescription Cette URL renvoit un objet au format JSON contenant
 * toutes les évaluations existantes
 *
 * @apiSuccessExample {html} Success-Response:
 * [
 * {
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
/**
 * @api {post} /evaluations Crée une nouvelle évaluation
 * @apiName PostEvaluation
 * @apiGroup Evaluations
 * @apiDescription Crée une nouvelle évaluation dans la base de donnée.
 *
 * La réponse est l'objet créée.
 *
 * @apiParam {String} name nom de l'évaluation à insérer
 *
 * @apiParam {String} groupClass groupe d'élèves visé par l'évaluation
 *
 * @apiParam {[Questions]} [questions] tableau de questions de l'évaluation. Si absent, sera
 * initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format
 * "textarea".
 *
 * @apiParamExample  {json}  Request-Example:
 *    {
 *    name: "Nouvelle éval",
 *    groupClass: "EBM_17_18",
 *    questions: [
   *    { content:"Est-ce une question ?",
   *      points : 3,
   *      format : "checkboxes"
   *    },
   *    { content:"Est-ce une autre question ?",
   *      points : 2
   *    }]
 *    }
 *
 *
 * @apiSuccessExample {html} Success-Response:
 * {
    "name": "Nouvelle éval",
    "date": "2018-03-07T15:03:15.087Z",
    "questions": [],
    "_id": "5a9fff33ed2a281dcecbbd85",
    "__v": 0
   }
 */

router.post('/', evaluationController.create);
router.delete('/:id', evaluationController.delete);

router.get('/:id/questions', questionController.findAll);
router.get('/:id/questions/:qid', questionController.findOne);
router.post('/:id/questions', questionController.create);
router.delete('/:id/questions/:qid', questionController.delete);

router.get('/:id/papers', paperController.findAllByEvaluation);

module.exports = router;
