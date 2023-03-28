const findTalkerByName = (term, payload) => payload
  .filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()));

const findTalkerByRate = (rate, payload) => payload.filter(({ talk }) => talk.rate === rate);

const findTalkerByDate = (date, payload) => payload.filter(({ talk }) => talk.watchedAt === date);

module.exports = {
  findTalkerByName,
  findTalkerByRate,
  findTalkerByDate,
};
