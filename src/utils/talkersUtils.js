const findTalkerByName = (term, payload) => payload
    .filter(({ name }) => name.includes(term));

module.exports = {
  findTalkerByName,
};
