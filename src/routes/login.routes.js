const { Router } = require('express');
const loginController = require('../constrollers/login.controller');
const { validateInputs } = require('../middlewares/login.middleware');

const loginRouter = Router();

loginRouter.post('/', validateInputs, loginController.signIn);

module.exports = loginRouter;
