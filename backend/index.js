require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const movementRoutes = require("./src/routes/movements");
const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");

const port = 80;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/movements", movementRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => res.send("FinTrack Backend Running"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
