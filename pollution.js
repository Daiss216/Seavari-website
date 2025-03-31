document.addEventListener("DOMContentLoaded", function () {
    //Map
    var map = L.map('map').setView([20.5937, 78.9629], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    //Dummy Pollution Data
    var pollutionData = [
        { location: "Mumbai", pollution: 80, chemicals: 65, coords: [19.076, 72.8777] },
        { location: "Chennai", pollution: 70, chemicals: 55, coords: [13.0827, 80.2707] },
        { location: "Kolkata", pollution: 60, chemicals: 50, coords: [22.5726, 88.3639] },
        { location: "Goa", pollution: 50, chemicals: 40, coords: [15.2993, 74.124] }
    ];

    pollutionData.forEach(point => {
        L.marker(point.coords).addTo(map)
            .bindPopup(`<b>${point.location}</b><br>Plastic Pollution: ${point.pollution}%<br>Chemical Contamination: ${point.chemicals}%`);
    });

    // Pollution Bar Chart
    var ctxPollution = document.getElementById("pollutionChart").getContext("2d");
    new Chart(ctxPollution, {
        type: "bar",
        data: {
            labels: pollutionData.map(p => p.location),
            datasets: [{
                label: "Plastic Pollution (%)",
                data: pollutionData.map(p => p.pollution),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });

    // Chemical Contamination Bar Chart
    var ctxChemical = document.getElementById("chemicalChart").getContext("2d");
    new Chart(ctxChemical, {
        type: "bar",
        data: {
            labels: pollutionData.map(p => p.location),
            datasets: [{
                label: "Chemical Contamination (%)",
                data: pollutionData.map(p => p.chemicals),
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });
});
