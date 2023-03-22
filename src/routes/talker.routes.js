const { Router } = require('express');
const { readTalkers } = require('../utils/fsTalkers');
const { talkerExists } = require('../middlewares/talkers.middlware');
const talkerController = require('../constrollers/talker.controller')

const talkerRouter = Router();

talkerRouter.get('/', talkerController.getAll);
talkerRouter.get('/:id', talkerExists, talkerController.getTalkerById);

module.exports = talkerRouter;