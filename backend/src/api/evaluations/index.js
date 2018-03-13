const { Router } = require('express');

const router = new Router();

const evaluationController = require('./evaluationController');
const questionController = require('./questionController');
const paperController = require('../papers/paperController');

/**
 * @api {get} /evaluations Récupèrer la liste de toutes les évaluations
 * @apiName GetEvaluations
 * @apiGroup Evaluations
 * @apiDescription Cette requête renvoit un objet au format JSON contenant
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

/**
 * @api {get} /evaluations/:id Récupèrer une évaluation par Id
 * @apiName GetEvaluationById
 * @apiGroup Evaluations
 * @apiDescription Une requête qui renvoit un objet au format JSON correspondant à l'évaluation
 * demandée
 *
 * @apiParam  {String} id   ID de l'évaluation à afficher
 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 * {
    "date": "2018-03-07T16:01:01.994Z",
    "questions": [],
    "_id": "5aa00cbddfc165256122dccc",
    "name": "Une évaluation particulière",
    "groupClass": "Un ensemble d'étudiant",
    "__v": 0
  }
 */
router.get('/:id', evaluationController.findOne);

/**
 * @api {post} /evaluations Créer une nouvelle évaluation
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

/**
 * @api {put} /evaluations/:id Modifier une évaluation
 * @apiName UpdateEvaluation
 * @apiGroup Evaluations
 * @apiDescription Modifie une évaluation
 *
 *
 * @apiParam {String} name nom de l'évaluation à insérer
 *
 * @apiParam {String} groupClass groupe d'élèves visé par l'évaluation
 *
 * @apiParam {[Questions]} [questions] tableau de questions de l'évaluation. Si absent, sera
 * initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format
 * "textarea".
 *
 * @apiParam {Boolean} published
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
 *    },
 *    published : true
 *
 */
router.put('/:id', evaluationController.update);

/**
 * @api {delete} /evaluations/:id Supprime une évaluation identifiée par Id
 * @apiName DeleteEvaluationById
 * @apiGroup Evaluations
 * @apiDescription Route permettant de supprimer une évaluation identifiée par son ID
 *

 * @apiParam  {String} id   ID de l'évaluation à supprimer

 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 *{
    "message": "evaluation supprimée"
  }
 */
router.delete('/:id', evaluationController.delete);

/**
 * @api {get} /evaluations/:id/questions
 * Récupère l'ensemble des questions d'une évaluation identifiée par son Id
 * @apiName GetQuestionsByEvaluationId
 * @apiGroup Questions
 * @apiDescription Une requête qui renvoit un tableau de questions pour une évaluation donnée
 * identifiée par son Id
 *
 * @apiParam  {String} id   ID de l'évaluation dont il faut renvoyer les questions

 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:

 *[
 {
     "format": "textarea",
     "content": "questions",
     "points": 2,
     "_id": "5aa789b5ef45226bfff41a29"
 },
 {
     "format": "textarea",
     "content": "questions",
     "points": 2,
     "_id": "5aa789b5ef45226bfff41a2a"
 },
 ]

 */
router.get('/:id/questions', questionController.findAll);

/**
 * @api {get} /evaluations/:id/questions/:qid
 * Récupère une question identifiée par son Id
 * @apiName GetQuestionById
 * @apiGroup Questions
 * @apiDescription Une requête qui renvoit question donnée identifiée par son Id
 * pour une évaluation donnée identifiée par son Id
 *
 * @apiParam  {String} id   ID de l'évaluation dont il faut renvoyer la question
 * @apiParam  {String} qid   ID de la question
 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *    qid: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 {
     "format": "textarea",
     "content": "questions",
     "points": 2,
     "_id": "5aa789b5ef45226bfff41a2a"
 }
 */
router.get('/:id/questions/:qid', questionController.findOne);

/**
 * @api {post} /evaluations/:id/questions
 * Crée une question dans l'évaluation donnée
 * @apiName PostQuestion
 * @apiGroup Questions
 * @apiDescription Une requête qui crée une question dans une évaluation donnée
 *
 * @apiParam  {String} id   ID de l'évaluation pour laquelle il faut créer la question
 * @apiParam  {String} content  Intitulé de la question
 * @apiParam  {number} points   Nombre de points attribué à cette question
 * @apiParam  {number} [format]   Format de la question (textarea, checkboxes, ...). "textarea" par
 * défaut
 * @apiParamExample  {json}  Request-Example:
 *    {
 *      id: 5aa00cbddfc165256122dccc,
 *      body:{
 *        content:"Est-ce une question ?",
 *        points: 3,
 *        format: "checkboxes"
 *      },
 *    }
 *
 * @apiSuccessExample {html} Success-Response:
 {
     "format":"textarea",
     "content": "questions",
     "points": 2
 }
 */
router.post('/:id/questions', questionController.create);

/**
 * @api {delete} /evaluations/:id/questions/:qid
 * Supprime une question identifiée par id
 * @apiName DeleteQuestion
 * @apiGroup Questions
 * @apiDescription Une requête qui crée une question dans une évaluation donnée
 *
 * @apiParam  {String} id   ID de l'évaluation pour laquelle il faut créer la question
 * @apiParam  {String} qid   ID de la question à supprimer
 * @apiParamExample  {string}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc,
 *    qid: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 *  { message : "la question a été supprimé }
 */
router.delete('/:id/questions/:qid', questionController.delete);

/**
 * @api {get} /evaluations/:id/papers
 * Récupère l'ensemble des copies associées à une évaluation identifiée par son Id
 * @apiName GetPapersByEvaluationId
 * @apiGroup Papers
 * @apiDescription Une requête qui renvoit un tableau de copies pour une évaluation donnée
 * identifiée par son Id
 *
 * @apiParam  {String} id   ID de l'évaluation dont il faut renvoyer les copies

 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 * [
 {
     "date": "2018-03-13T08:00:09.084Z",
     "responses": [],
     "corrected": false,
     "_id": "5aa78509d25158676fd19935",
     "evaluationId": "5aa784bcd25158676fd19934",
     "author": "author",
     "__v": 0
 },
 {
     "date": "2018-03-13T08:00:11.472Z",
     "responses": [],
     "corrected": false,
     "_id": "5aa7850bd25158676fd19936",
     "evaluationId": "5aa784bcd25158676fd19934",
     "author": "author",
     "__v": 0
 },
 ]
 */
router.get('/:id/papers', paperController.findAllByEvaluation);

module.exports = router;
