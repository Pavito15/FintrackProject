const db = require('./db');

const initDB = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS movements (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amount DECIMAL(10,2),
      category VARCHAR(50),
      method ENUM('cash', 'card'),
      date DATE,
      user_id INT
    );
  `;
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error al crear tabla movements:', err);
    } else {
      console.log('Tabla movements verificada o creada');
    }
  });
};

module.exports = initDB;
