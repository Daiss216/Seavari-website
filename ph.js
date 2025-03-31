document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("pollutionChart").getContext("2d");

    const data = {
        labels: [
            "Philippines", "India", "Malaysia", "China", "Indonesia",
            "Myanmar", "Brazil", "Vietnam", "Bangladesh", "Thailand",
            "Nigeria", "Turkey", "Cameroon", "Sri Lanka", "Guatemala",
            "Rest of the World"
        ],
        datasets: [{
            data: [360000, 130000, 73000, 71000, 56000, 40000, 38000, 28000, 25000, 23000, 19000, 14000, 11000, 9700, 7100, 95200],
            backgroundColor: [
                "#b71c1c", "#d32f2f", "#e57373", "#ff8a65", "#ffb74d",
                "#fff176", "#aed581", "#4db6ac", "#4fc3f7", "#64b5f6",
                "#7986cb", "#9575cd", "#ba68c8", "#f06292", "#ff7043", "#616161"
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, 
          
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "white"
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let value = tooltipItem.raw.toLocaleString();
                            return `${tooltipItem.label}: ${value} tons`;
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});
