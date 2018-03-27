const { Router } = require('express');

const router = new Router();

const paperController = require('./paperController');
const responseController = require('./responseController');

/**
 * @api {get} /papers Récupèrer la liste de toutes les copies
 * @apiName GetPapers
 * @apiGroup Papers
 * @apiDescription Cette requête renvoit un objet au format JSON contenant
 * toutes les copies existantes
 *
 */
router.get('/', paperController.findAll);

/**
 * @api {get} /papers/:id Récupèrer une copiepar Id
 * @apiName GetPaperById
 * @apiGroup Papers
 * @apiDescription Une requête qui renvoit un objet au format JSON correspondant à la copie
 * demandée
 *
 * @apiParam  {String} id   ID de la copie à afficher
 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 */
router.get('/:id', paperController.findOne);

/**
 * @api {put} /papers/:id Modifier une évaluation
 * @apiName UpdatePaper
 * @apiGroup Papers
 * @apiDescription Modifie une copie
 *
 * @apiParam  {String} id   ID de la copie à afficher
 *
 * @apiParam {Object} responses tableau de réponses
 *
 * @apiParam {Boolean} corrected
 *
 */
router.put('/:id', paperController.update);

/**
 * @api {post} /papers Créer une nouvelle copie
 * @apiName PostPaper
 * @apiGroup Papers
 * @apiDescription Crée une nouvelle évaluation dans la base de donnée.
 *
 * La réponse est l'objet créée.
 *
 * @apiParam  {String} id   ID de la copie à afficher
 *
 * @apiParam  {String} evaluationId   ID de l'évaluation associée à la copie
 *
 * @apiParam {String} author username de l'auteur de la copie
 *
 * @apiParam {[Responses]} [response] tableau de réponses de l'évaluation. Si absent, sera
 * initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format
 * "textarea".
 *
 */
router.post('/', paperController.create);

/**
 * @api {delete} /papers/:id Supprime une copie identifiée par Id
 * @apiName DeletePaperById
 * @apiGroup Papers
 * @apiDescription Route permettant de supprimer une copie identifiée par son ID
 *

 * @apiParam  {String} id   ID de la copie à supprimer

 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 *{
    "message": "copie supprimée"
  }
 */
router.delete('/:id', paperController.delete);

/**
 * @api {get} /papers/:id/responses
 * Récupère l'ensemble des réponses d'une copie identifiée par son Id
 * @apiName GetResponsesByPaperId
 * @apiGroup Responses
 * @apiDescription Une requête qui renvoit un tableau de réponses pour une copie donnée
 * identifiée par son Id
 *
 * @apiParam  {String} id   ID de la copie dont il faut renvoyer les réponses

 * @apiParamExample  {String}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc
 *
 */
router.get('/:id/responses', responseController.findAll);

/**
 * @api {get} /papers/:id/responses/:rid
 * Récupère une réponse identifiée par son Id
 * @apiName GetResponseById
 * @apiGroup Responses
 * @apiDescription Une requête qui renvoit une réponse donnée identifiée par son Id
 * pour une copie donnée identifiée par son Id
 *
 * @apiParam  {String} id   ID de la copie dont il faut renvoyer la réponse
 * @apiParam  {String} rid   ID de la réponse
 *
 */
router.get('/:id/responses/:rid', responseController.findOne);

/**
 * @api {post} /papers/:id/responses
 * Crée une réponse dans la copie donnée
 * @apiName PostResponse
 * @apiGroup Responses
 * @apiDescription Une requête qui crée une réponse dans une copie donnée
 *
 * @apiParam  {String} id   ID de la copie pour laquelle il faut créer la réponse
 * @apiParam  {String} content  Intitulé de la réponse
 * @apiParam  {String} questionId   id de la question associée
 */
router.post('/:id/responses', responseController.create);

/**
 * @api {put} /papers/:id/responses/:rid
 * Modifie une réponse identifiée par son id
 * @apiName UpdateResponseById
 * @apiGroup Responses
 * @apiDescription Cette route permet de modifier le contenu d'une réponse et/ou l'id
 * du feedback associé
 *
 * @apiParam  {String} id   ID de la copie dont il faut modifier la réponse
 * @apiParam  {String} rid   ID de la réponse
 *
 * @apiParam  {String} [content]   contenu de la réponse
 *
 * @apiParam  {String} [feedbackId]   Id du feedback associé à cette réponse
 */
router.put('/:id/responses/:rid', responseController.update);

/**
 * @api {delete} /papers/:id/responses/:rid
 * Supprime une réponse identifiée par id
 * @apiName DeleteResponse
 * @apiGroup Responses
 * @apiDescription Une requête qui supprime une réponse dans une copie donnée
 *
 * @apiParam  {String} id   ID de la copie pour laquelle il faut supprimer la réponse
 * @apiParam  {String} qid   ID de la réponse à supprimer
 * @apiParamExample  {string}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc,
 *    qid: 5aa00cbddfc165256122dccc
 *
 * @apiSuccessExample {html} Success-Response:
 *  { message : "la réponse a été supprimé }
 */
router.delete('/:id/responses/:rid', responseController.delete);

module.exports = router;
