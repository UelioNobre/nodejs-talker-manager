
const { createToken } = require('../utils/createToken');

const signIn = (req, res) => {
  const token = createToken();
  res.status(200).json({token});
}

module.exports = {
  signIn,
}
