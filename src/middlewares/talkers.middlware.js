const { readTalkers } = require('../utils/fsTalkers');
const requestErrors = require('../utils/requestErrors');
const { isValidName, isValidAge, isTalkValid } = require('../utils/validations');

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

  const validateName = isValidName(name);
  if (validateName.type) return requestErrors(res, validateName.type);

  const validateAge = isValidAge(age);
  if (validateAge.type) return requestErrors(res, validateAge.type);

  const validateTalk = isTalkValid(talk);
  if (validateTalk.type) return requestErrors(res, validateTalk.type);

  next();
};

const talkerUpdateMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const validateName = isValidName(name);
  if (validateName.type) return requestErrors(res, validateName.type);

  const validateAge = isValidAge(age);
  if (validateAge.type) return requestErrors(res, validateAge.type);

  const validateTalk = isTalkValid(talk);
  if (validateTalk.type) return requestErrors(res, validateTalk.type);

  const talkersData = await readTalkers();
  const isExists = talkersData.some((t) => t.id === +id);
  if (!isExists) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};

module.exports = {
  talkerExists,
  talkerCreateValidation,
  talkerUpdateMiddleware,
};