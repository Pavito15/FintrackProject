document.addEventListener("DOMContentLoaded", () => {
    // Carga dinámica de navbar y footer
    fetch("components/navbar.html")
      .then((res) => res.text())
      .then((data) => (document.getElementById("navbar-placeholder").innerHTML = data));
  
    fetch("components/footer.html")
      .then((res) => res.text())
      .then((data) => (document.getElementById("footer-placeholder").innerHTML = data));
  
    // Simulación de datos de gastos
    const expenses = [
      { category: "Food", note: "Groceries", amount: 250, date: "2025-04-22" },
      { category: "Rent", note: "April Rent", amount: 1200, date: "2025-04-01" },
      { category: "Transport", note: "Gasoline", amount: 90, date: "2025-04-18" },
      { category: "Health", note: "Pharmacy", amount: 60, date: "2025-04-20" },
    ];
  
    const expenseList = document.getElementById("expenseList");
  
    function renderExpenses(data) {
      expenseList.innerHTML = "";
      data.forEach((expense) => {
        const item = document.createElement("div");
        item.className = "expense-item";
        item.innerHTML = `
          <div class="left">
            <div class="category">${expense.category}</div>
            <div class="note">${expense.note} — ${expense.date}</div>
          </div>
          <div class="amount">$${expense.amount.toFixed(2)}</div>
        `;
        expenseList.appendChild(item);
      });
    }
  
    renderExpenses(expenses);
  
    // Filtros
    document.getElementById("searchInput").addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase();
      const filtered = expenses.filter(
        (ex) =>
          ex.note.toLowerCase().includes(keyword) ||
          ex.category.toLowerCase().includes(keyword)
      );
      renderExpenses(filtered);
    });
  
    document.getElementById("filterCategory").addEventListener("change", (e) => {
      const category = e.target.value;
      const filtered = category
        ? expenses.filter((ex) => ex.category.toLowerCase() === category)
        : expenses;
      renderExpenses(filtered);
    });
  });
  