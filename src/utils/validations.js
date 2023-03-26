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

module.exports = {
  validateDateFormat,
  validateRate,
  validateEmail
}
