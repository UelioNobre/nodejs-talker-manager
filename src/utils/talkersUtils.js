const findTalkerByName = (term, payload) => payload
  .filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()));

const findTalkerByRate = (rate, payload) => payload.filter(({ talk }) => talk.rate === rate);

module.exports = {
  findTalkerByName,
  findTalkerByRate,
};
