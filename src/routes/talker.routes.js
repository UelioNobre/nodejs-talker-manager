const { Router } = require('express');
const { talkerExists, talkerCreateValidation } = require('../middlewares/talkers.middlware');
const talkerController = require('../constrollers/talker.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const talkerRouter = Router();

talkerRouter.get('/', talkerController.getAll);
talkerRouter.get('/:id', talkerExists, talkerController.getTalkerById);
talkerRouter.post('/', authMiddleware, talkerCreateValidation, talkerController.addTalker);

module.exports = talkerRouter;