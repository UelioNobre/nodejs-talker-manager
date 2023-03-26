const authMiddleware = (req, res, next) => {
  // Middleware isAuth
  const { headers: { authorization: token } } = req;

  if (!token) return res.status(401).json({ "message": "Token não encontrado" });
  
  if (token.length !== 16) return res.status(401).json({ "message": "Token inválido" });

  next();
}

module.exports = authMiddleware;
