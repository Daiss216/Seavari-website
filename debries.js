const ctx = document.getElementById('marineDebrisChart').getContext('2d');

const marineDebrisData = {
    labels: [
        'Cigarettes (32%)',
        'Food Wrappers (9%)',
        'Caps & Lids (8%)',
        'Tableware (6%)',
        'Plastic Bottles (6%)',
        'Plastic Bags (5%)'
    ],
    datasets: [{
        data: [32, 9, 8, 6, 6, 5],
        backgroundColor: [
            '#4F6228',  // Cigarettes
            '#F8E15C',  // Food Wrappers
            '#E74C3C',  // Caps & Lids
            '#F4D03F',  // Tableware
            '#2C3E50',  // Plastic Bottles
            '#7FB3D5'   // Plastic Bags
        ],
        borderColor: '#fff',
        borderWidth: 2
    }]
};

const marineDebrisChart = new Chart(ctx, {
    type: 'pie',
    data: marineDebrisData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide default legend since we added our own
            }
        }
    }
});