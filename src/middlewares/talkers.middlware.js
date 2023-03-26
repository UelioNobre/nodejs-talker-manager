const { readTalkers } = require('../utils/fsTalkers');
const { validateDateFormat, validateRate } = require('../utils/validations');



const talkerExists = async (req, res, next) => {
  const talkersData = await readTalkers();
  const { id } = req.params;
  const isExists = talkersData.some((t) => t.id === +id);

  if (!isExists) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};

const talkerCreateValidation = (req, res, next) => {
  const { name, age, talk } = req.body;

  if (!name) return res.status(400).json({
    message: 'O campo "name" é obrigatório'
  });
  
  if (name.length < 3) return res.status(400).json({
    message: 'O "name" deve ter pelo menos 3 caracteres'
  });
  
  if (!age) return res.status(400).json({
    message: 'O campo "age" é obrigatório'
  });
  
  if (!Number.isInteger(age) || age < 18) return res.status(400).json({
    message: 'O campo "age" deve ser um número inteiro igual ou maior que 18'
  });

  if (!talk) return res.status(400).json({
    message: 'O campo "talk" é obrigatório'
  });

  if (!Object.keys(talk).includes('rate')) return res.status(400).json({
    message: 'O campo "rate" é obrigatório'
  });

  if (!validateRate(talk.rate)) return res.status(400).json({
    message: 'O campo "rate" deve ser um número inteiro entre 1 e 5'
  });

  if (!Object.keys(talk).includes('watchedAt')) return res.status(400).json({
    message: 'O campo "watchedAt" é obrigatório'
  });

  if (!validateDateFormat(talk.watchedAt)) return res.status(400).json({
    message: "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
  });


  next();
};

module.exports = {
  talkerExists,
  talkerCreateValidation
};