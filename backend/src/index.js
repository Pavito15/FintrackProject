require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const initDB = require('./config/initDb');

const app = express();
app.use(express.json());
app.use(cookieParser());

const movementRoutes = require('./routes/movements');
app.use('/movements', movementRoutes);

app.get('/', (req, res) => res.send('FinTrack Backend Running'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  initDB(); // <-- Aquí se crea la tabla si no existe
});
