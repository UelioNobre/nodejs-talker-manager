const findTalkerByName = (term, payload) => {
  payload.filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()));
};

module.exports = {
  findTalkerByName,
};
