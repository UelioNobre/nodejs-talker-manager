const { readTalkers } = require('../utils/fsTalkers');

const getAll = async (_, res) => {
  const talkersData = await readTalkers();
  res.status(200).json(talkersData);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const talkersData = await readTalkers();
  const talker = talkersData.find((talk) => talk.id === +id);
  return res.status(200).json(talker);
};

module.exports = {
  getAll,
  getTalkerById,
};