const Users = require("../models/Users");

exports.createUser = async (req, res) => {
  const data = { ...req.body };

  const response = await Users.create(data);

  if (!response) return res.status(500).send("Internal server error");

  return res.status(201).json({ message: "Todo bien" });
};
