const { Router } = require('express');

const router = new Router();

const feedbackController = require('./feedbackController');

/**
 * @api {get} /feedbacks/:id
 * Récupère un feedback identifié par son Id
 * @apiName GetFeedbackById
 * @apiGroup Feedbacks
 * @apiDescription Renvoie le feedback demandé par Id
 *
 * @apiParam  {String} id   ID du feedback
 *
 * @apiParamExample  {string}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc,
 *
 */
router.get('/:id', feedbackController.findOne);

/**
 * @api {post} /feedbacks
 * Crée un feedback
 * @apiName DeleteFeedbackById
 * @apiGroup Feedbacks
 * @apiDescription Crée un feedback
 *
 * @apiParam  {String} evaluationId   ID de l'évaluation associée au feedback
 * @apiParam  {String} questionId   ID de la question associée au feedback
 * @apiParam  {number} points   nombre de points associés à ce feedback
 * @apiParam  {String} content   intitulé du feedback
 *
 * @apiParamExample  {json}  Request-Example:
 *    {
 *    evaluationId: '5aa00cbddfc165256122dccc',
 *    questionId: '5aa00cbddfc165256122dccc',
 *    points: 2,
 *    content: 'Commentaire sur la réponse',
 *    }
 *
 */
router.post('/', feedbackController.create);

/**
 * @api {delete} /feedbacks/:id
 * Supprime un feedback identifié par son Id
 * @apiName DeleteFeedbackById
 * @apiGroup Feedbacks
 * @apiDescription Supprime le feedback identifié par son Id
 *
 * @apiParam  {String} id   ID du feedback
 *
 * @apiParamExample  {string}  Request-Example:
 *    id: 5aa00cbddfc165256122dccc,
 *
 */
router.delete('/:id', feedbackController.delete);

router.delete('/', feedbackController.deleteAll);

module.exports = router;
