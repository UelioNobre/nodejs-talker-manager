const validateEmail = (email) => {
  if (email.length > 64) return false;

  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

module.exports = validateEmail;
