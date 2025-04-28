require('dotenv').config();

const express = require('express');
const app = express();
const movementRoutes = require('./routes/movementRoutes');
const { sequelize } = require('./config/database');

// Middleware
app.use(express.json());

// Conect db amd start server
const PORT = 6000;

sequelize.sync().then(() => {
    console.log('Base de datos bien');
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en puerto ${PORT}`);
    });
}).catch((error) => {
    console.error('Error sincronizando la base de datos:', error)
});
