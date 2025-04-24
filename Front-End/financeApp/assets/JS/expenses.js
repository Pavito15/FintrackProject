document.addEventListener("DOMContentLoaded", () => {
    // Navbar y footer
    fetch("components/navbar.html")
      .then((res) => res.text())
      .then((data) => (document.getElementById("navbar-placeholder").innerHTML = data));
  
    fetch("components/footer.html")
      .then((res) => res.text())
      .then((data) => (document.getElementById("footer-placeholder").innerHTML = data));
  
    // Formulario
    const form = document.getElementById("expenseForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const expense = {
        amount: parseFloat(document.getElementById("amount").value),
        category: document.getElementById("category").value,
        note: document.getElementById("note").value || "No note",
        date: document.getElementById("date").value,
      };
  
      // Guardar en localStorage (o enviar a servidor/API)
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));
  
      alert("Expense saved!");
      form.reset();
    });
  });
  