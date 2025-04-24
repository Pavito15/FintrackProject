document.addEventListener('DOMContentLoaded', () => {
    // Load navbar and footer dynamically
    fetch('components/navbar.html')
      .then(res => res.text())
      .then(data => document.getElementById('navbar-placeholder').innerHTML = data);
  
    fetch('components/footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer-placeholder').innerHTML = data);
  
    // Chart.js example (replace with real data later)
    const ctx = document.getElementById('expenseChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Food', 'Health', 'Transport'],
        datasets: [{
          label: 'Spending by Category',
          data: [1000, 500, 250, 1000],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  });
  