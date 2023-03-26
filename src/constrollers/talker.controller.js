const { readTalkers, writeTalkers } = require('../utils/fsTalkers');

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

const addTalker = async (req, res) => {

  // Controller
  const talker = req.body;

  // Service
  const talkers = await readTalkers();
  const id = talkers.length + 1;
  const newTalker = { ...talker, id };
  await writeTalkers(newTalker);

  // Controller
  return res.status(201).json(newTalker);
}

module.exports = {
  getAll,
  getTalkerById,
  addTalker
};