document.addEventListener("DOMContentLoaded", () => {
  // Load navbar and footer dynamically
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("navbar-placeholder").innerHTML = data)
    );
});
