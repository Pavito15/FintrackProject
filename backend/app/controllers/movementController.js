const Movement = require('../models/movement');

async function getMovementById(req, res) {
    const { id } = req.params;
    const movement = await Movement.findByPk(id);
    if (!movement) return res.status(404).json({ error: 'Movement not found' });
    res.json(movement);
  }
  
  async function createMovement(req, res) {
    const data = req.body;
    const movement = await Movement.create(data);
    res.status(201).json({ id: movement.id });
  }
  
  async function updateMovement(req, res) {
    const { id } = req.params;
    const data = req.body;
    const movement = await Movement.findByPk(id);
    if (!movement) return res.status(404).json({ error: 'Movement not found' });
    await movement.update(data);
    res.json({ message: 'Movement updated' });
  }
  
  async function deleteMovement(req, res) {
    const { id } = req.params;
    const movement = await Movement.findByPk(id);
    if (!movement) return res.status(404).json({ error: 'Movement not found' });
    await movement.destroy();
    res.json({ message: 'Movement deleted' });
  }
  
  module.exports = {
    getMovementById,
    createMovement,
    updateMovement,
    deleteMovement
  };