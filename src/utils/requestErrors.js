const { errorMessages } = require('./validationsErrors');

const requestErrors = (res, type) => res.status(400).json({
  message: errorMessages[type],
});

module.exports = requestErrors;