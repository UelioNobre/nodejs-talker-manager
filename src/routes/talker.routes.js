const { Router } = require('express');
const {
  talkerExists,
  talkerCreateValidation,
  talkerUpdateMiddleware,
} = require('../middlewares/talkers.middlware');

const authMiddleware = require('../middlewares/auth.middleware');
const talkerController = require('../constrollers/talker.controller');

const talkerRouter = Router();

talkerRouter.get('/search', authMiddleware, talkerController.searchByName);

talkerRouter.get('/:id', talkerExists, talkerController.getTalkerById);
talkerRouter.get('/', talkerController.getAll);

talkerRouter.patch('/rate/:id', authMiddleware, talkerController.changeRate);
talkerRouter.post('/', authMiddleware, talkerCreateValidation, talkerController.addTalker);
talkerRouter.put('/:id',
  authMiddleware,
  talkerUpdateMiddleware,
  talkerController.updateTalker);

talkerRouter.delete('/:id', authMiddleware, talkerController.deleteById);

module.exports = talkerRouter;
