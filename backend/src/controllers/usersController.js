const Users = require("../models/Users");

exports.createUser = async (req, res) => {
  const data = { ...req.body };

  let errorCount = 0;
  if (!data.name) errorCount += 1;
  if (!data.email) errorCount += 1;
  if (!data.password) errorCount += 1;

  if (errorCount > 0) return res.status(400).send("Missing information");

  const userWithEmail = await Users.getUserByEmail(data.email);
  if (userWithEmail) {
    return res.status(400).send("Email already used");
  }

  const response = await Users.create(data);

  if (!response) return res.status(500).send("Internal server error");

  return res.status(201).json({ msg: "User created" });
};
