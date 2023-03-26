const { validateEmail } = require('../utils/validations');

const validateInputs = (req, res, next) => {
  const { body } = req;
  let message = 'O campo "email" é obrigatório';

  if (!Object.keys(body).includes('email')) return res.status(400).json({ message });

  const { email } = req.body;
  message = 'O "email" deve ter o formato "email@email.com"';
  if (!validateEmail(email)) return res.status(400).json({ message });
  
  message = 'O campo "password" é obrigatório';
  if (!Object.keys(body).includes('password')) return res.status(400).json({ message });
  
  const { password } = req.body;
  message = 'O "password" deve ter pelo menos 6 caracteres';
  if (password.length < 6) return res.status(400).json({ message });

  next();
};

module.exports = {
  validateInputs,
};