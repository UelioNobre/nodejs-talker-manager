const crypto = require('crypto');

const createToken = () => {
  const tokenPayload = Math.random().toString(16);

  const token = crypto
    .createHash('sha256')
    .update(tokenPayload)
    .digest("hex");

  return token.substring(0, 16);
};

module.exports = {
  createToken,
}
