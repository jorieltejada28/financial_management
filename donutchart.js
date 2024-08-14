document.addEventListener("DOMContentLoaded", function() {
    // Get the context for the chart
    const ctx = document.getElementById("donutChart").getContext("2d");

    // Data for the doughnut chart
    const data = {
        labels: [
            "Food and Beverage",
            "Labor",
            "Overhead and Operating",
            "Marketing and Promotion",
            "Technology and Software",
            "Miscellaneous Expenses"
        ], // Labels for the doughnut chart
        datasets: [{
            data: [30, 25, 20, 15, 5, 5], // Data for each category
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"], // Colors for each category
            hoverOffset: 4, // Offset for hover effect
        }],
    };

    // Configuration for the doughnut chart
    const config = {
        type: "doughnut", // Chart type
        data: data,
        options: {
            responsive: true, // Ensures the chart is responsive
            maintainAspectRatio: false, // Allows the chart to adjust with the container
            plugins: {
                legend: {
                    position: "top", // Position of the legend
                },
                tooltip: {
                    enabled: true, // Enable tooltips
                },
                title: {
                    display: true, // Display the title
                    text: "Expenses", // Title text
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
            cutout: "70%", // Cutout percentage for the doughnut shape
        },
    };

    // Create the doughnut chart with the given configuration
    new Chart(ctx, config);
});
