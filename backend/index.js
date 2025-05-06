require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const port = 80;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const movementRoutes = require("./src/routes/movements");
app.use("/movements", movementRoutes);

app.get("/", (req, res) => res.send("FinTrack Backend Running"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
