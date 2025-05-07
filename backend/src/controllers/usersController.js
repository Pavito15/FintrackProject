const Users = require("../models/Users");

exports.createUser = async (req, res) => {
  const data = { ...req.body };

  let errorCount = 0;
  if (!data.name) errorCount += 1;
  if (!data.email) errorCount += 1;
  if (!data.password) errorCount += 1;

  if (errorCount > 0) return res.status(400).send("Missing information");

  const response = await Users.create(data);

  if (!response) return res.status(500).send("Internal server error");

  let token = jwt.sign(
    {
      name: response.name,
      email: response.email,
      user_id: response.id,
    },
    process.env.TOKEN_SECRET
  );

  return res.status(201).json({ token });
};
