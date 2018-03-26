const { Router } = require('express');

const router = new Router();

const userController = require('./userController');

/**
 * @api {get} /users
 * Renvoie les informations de l'user
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription Renvoie les infos de l'utilisateur mises à dispositions par LinkApp
 *
 */
router.get('/', userController.find);


module.exports = router;
