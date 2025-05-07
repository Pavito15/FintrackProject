const Movement = require("../models/Movement");

exports.createMovement = (req, res) => {
  const user_id = req.user_id;
  const data = { ...req.body, user_id };
  Movement.create(data, (err, result) => {
    if (err) res.status(500).send("Internal server error");
    res.status(201).json({ message: "Movimiento creado", id: result.insertId });
  });
};

exports.getMovement = (req, res) => {
  Movement.getById(req.params.id, (err, results) => {
    if (err) res.status(500).send("Internal server error");
    if (results.length === 0)
      res.status(404).json({ message: "No encontrado" });
    res.json(results);
  });
};

exports.updateMovement = (req, res) => {
  Movement.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send("Internal server error");
    res.json({ message: "Movimiento actualizado" });
  });
};

exports.deleteMovement = (req, res) => {
  Movement.delete(req.params.id, (err) => {
    if (err) res.status(500).send("Internal server error");
    res.json({ message: "Movimiento eliminado" });
  });
};

exports.getMovements = (req, res) => {
  Movement.getMovements(req.user_id, (err, results) => {
    if (err) res.status(500).send("Internal server error");
    res.json(results);
  });
};
