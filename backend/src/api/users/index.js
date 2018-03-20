const { Router } = require('express');

const router = new Router();

const userController = require('./userController');


router.get('/', userController.find);


module.exports = router;
