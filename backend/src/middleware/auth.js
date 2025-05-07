const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.get("x-auth");
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user_id = decoded.user_id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token inválido" });
  }
};
