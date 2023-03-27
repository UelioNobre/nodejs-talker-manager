const validateDateFormat = (date) => {
  if (date.length !== 10) return false;
  if (date.split('/').length !== 3) return false;
  return true;
};

const validateRate = (rate) => {
  if (!Number.isInteger(rate)) return false;
  return /^([1-5]{1})$/.test(rate);
};

const validateEmail = (email) => {
  if (email.length > 64) return false;

  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const isValidWatchedAt = (talk) => {
  if (!Object.keys(talk).includes('watchedAt')) return { type: 'TALK_WATCHEDAT_UNDEFINED' };
  if (!validateDateFormat(talk.watchedAt)) return { type: 'TALK_WATCHEDAT_OUT_RANGE' };
  
  return { type: null };
};

const isValidRate = (talk) => {
  if (!Object.keys(talk).includes('rate')) return { type: 'TALK_RATE_UNDEFINED' };
  if (!validateRate(talk.rate)) return { type: 'TALK_RATE_OUT_RANGE' };

  return { type: null };
};

const isValidName = (name) => {
  if (!name) return { type: 'NAME_UNDEFINED' };
  if (name.length < 3) return { type: 'NAME_SHORT' };

  return { type: null };
};

const isValidAge = (age) => {
  if (!age) return { type: 'AGE_UNDEFINED' };
  if (!Number.isInteger(age)) return { type: 'AGE_INVALID' };
  if (age < 18) return { type: 'AGE_INVALID' };

  return { type: null };
};

const isTalkValid = (talk) => {
  if (!talk) return { type: 'TALK_UNDEFINED' };

  const checkRate = isValidRate(talk);
  if (checkRate.type) return checkRate;
  
  const validateWatchedAt = isValidWatchedAt(talk);
  if (validateWatchedAt.type) return validateWatchedAt;

  return { type: null };
};

module.exports = {
  validateEmail,
  validateRate,
  isTalkValid,
  isValidAge,
  isValidName,
};
