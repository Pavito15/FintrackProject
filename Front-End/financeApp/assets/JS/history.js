document.addEventListener("DOMContentLoaded", async () => {
  // Carga dinámica de navbar y footer
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("navbar-placeholder").innerHTML = data)
    );

  fetch("components/footer.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("footer-placeholder").innerHTML = data)
    );

  const expenseList = document.getElementById("expenseList");

  function renderExpenses(data) {
    expenseList.innerHTML = "";
    data.forEach((expense) => {
      const item = document.createElement("div");
      item.className = "expense-item";

      const isoString = expense.date;
      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const formatted = `${day}/${month}/${year} ${hours}:${minutes}`;

      item.innerHTML = `
          <div class="left">            
            <div class="note">${expense.description} — ${formatted}</div>
          </div>
          <div class="amount expense_${expense.type}"> ${
        expense.type == "income" ? "+" : "-"
      } $${expense.amount.toFixed(2)}</div>
        `;
      expenseList.appendChild(item);
    });
  }

  const response = await MovementsAPI.GetMovements();
  handleResponse(
    async () => {
      expensese = await response.json();
      renderExpenses(expenses);
    },
    response,
    200
  );
});
