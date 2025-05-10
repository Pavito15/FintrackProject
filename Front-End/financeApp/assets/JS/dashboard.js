document.addEventListener("DOMContentLoaded", async () => {
  // Load navbar and footer dynamically
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("navbar-placeholder").innerHTML = data)
    );

  let { incomes, expenses, balance } = await MathAPI.GetData();
  console.log(incomes);
  console.log(expenses);
  console.log(balance);
  document.getElementById("totalIncome").innerText = incomes;
  document.getElementById("totalExpenses").innerText = expenses;
  document.getElementById("balance").innerText = balance;
});
