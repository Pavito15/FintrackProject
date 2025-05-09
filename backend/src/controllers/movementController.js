const Movement = require('../models/Movement');

exports.createMovement = (req, res) => {
  const user_id = req.user_id;
  const data = { ...req.body, user_id };
  Movement.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Movimiento creado', id: result.insertId });
  });
};

exports.getMovement = (req, res) => {
  Movement.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(results[0]);
  });
};

exports.updateMovement = (req, res) => {
  Movement.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Movimiento actualizado' });
  });
};

exports.deleteMovement = (req, res) => {
  Movement.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Movimiento eliminado' });
  });
};
