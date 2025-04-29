const db = require('../config/db');

const Movement = {
  create: (data, callback) => {
    const { amount, category, method, date, user_id } = data;
    db.query(
      'INSERT INTO movements (amount, category, method, date, user_id) VALUES (?, ?, ?, ?, ?)',
      [amount, category, method, date, user_id],
      callback
    );
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM movements WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    const { amount, category, method, date } = data;
    db.query(
      'UPDATE movements SET amount = ?, category = ?, method = ?, date = ? WHERE id = ?',
      [amount, category, method, date, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM movements WHERE id = ?', [id], callback);
  }
};

module.exports = Movement;
