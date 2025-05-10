const Movement = require("../models/Movement");

exports.getTotalincome = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) return res.status(400).json({ error: "user_id es requerido" });

  Movement.getMovements(user_id, (err, movements) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener movimientos " });

    const incomeTotal = movements
      .filter((m) => m.type === "ingreso")
      .reduce((sum, m) => sum + Number(m.amount), 0);

    res.json({ total_income: incomeTotal });
  });
};

exports.getTotalExpenses = async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) return res.status(400).json({ error: "user_id es requerido" });

  Movement.getMovements(user_id, (err, movements) => {
    if (err)
      return res.status(500).json({ error: "Error al obtener movimientos " });

    const expenseTotal = movements
      .filter((m) => m.type === "egresp")
      .reduce((sum, m) => sum + Number(m.amount), 0);

    res.json({ total_expense: expenseTotal });
  });
};

exports.getBalance = async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) return res.status(400).json({ error: "user_id es requerido" });

  Movement.getMovements(user_id, (err, movements) => {
    if (err)
      return res.status(500).json({ error: "Error obteniendo movimientos" });

    const income = movements
      .filter((m) => m.type === "ingreso")
      .reduce((sum, m) => sum + Number(m.amount), 0);

    const expense = movements
      .filter((m) => m.type === "egreso")
      .reduce((sum, m) => sum + Number(m.amount), 0);

    const balance = income - expense;

    res.json({ balance });
  });
};
