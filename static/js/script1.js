const pie = document.getElementById("pieChart");

new Chart(pie, {
    type: "doughnut",
    data: {
        labels: ["Confirmed", "Pending", "Cancelled"],
        datasets: [{
            data: [120, 70, 40],
            backgroundColor: [
                "#6C63FF",
                "#22C55E",
                "#F59E0B"
            ]
        }]
    }
});

const line = document.getElementById("lineChart");

new Chart(line, {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May"
        ],
        datasets: [{
            label: "Registrations",
            data: [
                20,
                35,
                45,
                60,
                80
            ],
            borderColor: "#6C63FF",
            backgroundColor: "rgba(108,99,255,0.2)",
            fill: true,
            tension: 0.4
        }]
    }
});