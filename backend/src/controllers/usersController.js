const Users = require("../models/Users");

exports.createUser = async (req, res) => {
  const data = { ...req.body };

  const response = await Users.create(data);

  if (!response) res.status(500).send("Internal server error");

  res.status(201).json({ message: "Todo bien" });
};
