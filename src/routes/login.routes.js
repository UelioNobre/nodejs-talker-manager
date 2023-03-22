const { Router } = require('express');
const loginController = require('../constrollers/login.controller');

const loginRouter = Router();

loginRouter.post('/', loginController.signIn);

module.exports = loginRouter;