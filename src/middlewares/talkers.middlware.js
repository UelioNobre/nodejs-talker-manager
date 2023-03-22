const { readTalkers } = require('../utils/fsTalkers');

const talkerExists = async (req, res, next) => {
  const talkersData = await readTalkers();
  const { id } = req.params;
  const talkerExists = talkersData.some((t) => t.id === +id);

  if (!talkerExists) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
}

module.exports = {
  talkerExists
}