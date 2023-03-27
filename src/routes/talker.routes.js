const { Router } = require('express');
const {
  talkerExists,
  talkerCreateValidation,
  talkerUpdateMiddleware,
} = require('../middlewares/talkers.middlware');

const authMiddleware = require('../middlewares/auth.middleware');
const talkerController = require('../constrollers/talker.controller');

const talkerRouter = Router();

talkerRouter.get('/', talkerController.getAll);
talkerRouter.get('/:id', talkerExists, talkerController.getTalkerById);
talkerRouter.post('/', authMiddleware, talkerCreateValidation, talkerController.addTalker);

talkerRouter.put('/:id',
  authMiddleware,
  talkerUpdateMiddleware,
  talkerController.updateTalker);

module.exports = talkerRouter;