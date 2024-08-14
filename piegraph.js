// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("pieChart").getContext("2d"); // Get the context for the pie chart

    // Data for the pie chart representing payroll components
    var data = {
        labels: ["Salaries", "Bonuses", "Taxes", "Benefits"], // Labels for the pie chart
        datasets: [
            {
                data: [60, 10, 20, 10], // Example data in percentages
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Colors for each category
                hoverBackgroundColor: ["#FF4384", "#36A2CB", "#FFBE56", "#4BA0A0"], // Colors when hovered
            },
        ],
    };

    // Create the pie chart
    var pieChart = new Chart(ctx, {
        type: "pie", // Type of chart
        data: data, // Data for the pie chart
        options: {
            responsive: true, // Makes the chart responsive to screen size
            maintainAspectRatio: false, // Allows the chart to adjust its size
            plugins: {
                legend: {
                    position: "bottom", // Position the legend at the bottom
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce((a, b) => a + b, 0); // Calculate total
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor((currentValue / total) * 100 + 0.5); // Calculate percentage
                            return data.labels[tooltipItem.index] + ": " + percentage + "%"; // Label with percentage
                        },
                    },
                },
                title: {
                    display: true, // Display the chart title
                    text: "Payroll", // Title text
                    font: {
                        size: 16, // Font size for the title
                    },
                    padding: {
                        top: 10, // Padding at the top
                        bottom: 10, // Padding at the bottom
                    },
                    color: 'gray', // Color of the title text
                },
            },
        },
    });
});
