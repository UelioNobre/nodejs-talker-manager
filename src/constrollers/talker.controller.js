const { readTalkers, writeTalkers, updateTalkers } = require('../utils/fsTalkers');
const { findTalkerByName } = require('../utils/talkersUtils');

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
};

const updateTalker = async (req, res) => {
  // Controller
  const { id } = req.params;
  const { name, age, talk } = req.body;

  // Service
  const talkersData = await readTalkers();
  const talker = { ...talkersData.find((t) => t.id === +id), name, age, talk };

  const talkers = talkersData.map((t) => {
    if (t.id === +id) return talker;
    return talk;
  });

  await updateTalkers(talkers);

  // Controller
  return res.status(200).json({ ...talker });
};

const deleteById = async (req, res) => {
  // Controller
  const { id } = req.params;

  // Service
  const talkersData = await readTalkers();
  const talkers = talkersData.filter((t) => t.id !== +id);
  await updateTalkers(talkers);

  // Controller
  return res.status(204).end();
};

const searchByName = async (req, res) => {
  // controller
  const { q } = req.query;

  // Service
  const talkersData = await readTalkers();

  if (q) return res.status(200).json(findTalkerByName(q, talkersData));

  return res.status(200).json(talkersData);
};

module.exports = {
  getAll,
  getTalkerById,
  addTalker,
  updateTalker,
  deleteById,
  searchByName,
};