const Movement = require("../models/Movement");

exports.createMovement = (req, res) => {
  const user_id = req.user_id;
  const data = { ...req.body, user_id };

  let errorCount = 0;
  if (!data.type) errorCount += 1;
  if (!data.description) errorCount += 1;
  if (!data.amount) errorCount += 1;

  if (errorCount > 0) return res.status(400).send("Missing information");

  Movement.create(data, (err, result) => {
    if (err) return res.status(500).send("Internal server error");
    return res
      .status(201)
      .json({ message: "Movimiento creado", id: result.insertId });
  });
};

exports.getMovement = (req, res) => {
  Movement.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).send("Internal server error");
    if (results.length === 0)
      return res.status(404).json({ message: "No encontrado" });
    res.json(results);
  });
};

exports.updateMovement = (req, res) => {
  let data = { ...req.body };
  let updatesCount = 0;
  if (data.type) updatesCount += 0;
  if (data.description) updatesCount += 0;
  if (data.amount) updatesCount += 0;

  if (updatesCount < 1) return res.status(400).send("Missing information");

  Movement.update(req.params.id, data, (err) => {
    if (err) return res.status(500).send("Internal server error");
    res.json({ message: "Movimiento actualizado" });
  });
};

exports.deleteMovement = (req, res) => {
  Movement.delete(req.params.id, (err) => {
    if (err) return res.status(500).send("Internal server error");
    res.json({ message: "Movimiento eliminado" });
  });
};

exports.getMovements = (req, res) => {
  Movement.getMovements(req.user_id, (err, results) => {
    if (err) return res.status(500).send("Internal server error");
    res.json(results);
  });
};
