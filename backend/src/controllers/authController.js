const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/Users");
require("dotenv").config();

exports.loginWithToken = async (req, res) => {
  let token = req.get("x-auth");
  if (!token) {
    res.status(404).send("Missing authentication");
    return;
  }

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (err) {
        res.status(402).send("Token provided is not valid");
      }
      res.send(decoded);
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let userEmail = await Users.getUserByEmail(email);
    if (userEmail) {
      let userPassword = userEmail.password;
      bcrypt.compare(password, userPassword, (err, okay) => {
        if (okay) {
          let token = jwt.sign(
            {
              email: email,
              id: userEmail.id,
            },
            process.env.TOKEN_SECRET
          );
          res.send({ token });
        } else {
          res.status(404).send("Bad password");
        }
      });
    } else res.status(404).send("Email not found");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
