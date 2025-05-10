function formatNumberWithCommas(number) {
  return number.toLocaleString("en-US");
}

document.addEventListener("DOMContentLoaded", async () => {
  // Load navbar and footer dynamically
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("navbar-placeholder").innerHTML = data)
    );

  let { incomes, expenses, balance } = await MathAPI.GetData();
  document.getElementById("totalIncome").innerText = `$${formatNumberWithCommas(
    incomes
  )}`;
  document.getElementById(
    "totalExpenses"
  ).innerText = `$${formatNumberWithCommas(expenses)}`;
  document.getElementById("balance").innerText = `$${formatNumberWithCommas(
    balance
  )}`;
});
