document.addEventListener("DOMContentLoaded", () => {
  // Navbar y footer
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

  // Formulario
  const form = document.getElementById("expenseForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const type = document.querySelector(
      'input[name="transactionType"]:checked'
    ).value;
    const description = document.getElementById("description").value || "N/A";
    const amount = parseFloat(document.getElementById("amount").value);
    const date = document.getElementById("date").value;

    let response = await MovementsAPI.CreateMovement(
      type,
      description,
      amount,
      date
    );

    handleResponse(
      async () => {
        alert("Expense saved!");
        window.location.replace("/dashboard.html");
      },
      response,
      201
    );
  });
});
