/*
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("barChart").getContext("2d");

    const data = {
        labels: [
            "January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November", "December"
        ], // X-axis labels for all months
        datasets: [
            {
                label: "Monthly Profit", // Label for the dataset
                data: [300, 500, 400, 700, 600, 450, 550, 650, 700, 750, 800, 850], // Example data for 12 months
                backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
                borderColor: "rgba(75, 192, 192, 1)", // Border color
                borderWidth: 1, // Border width
            },
        ],
    };

    const barChart = new Chart(ctx, {
        type: "bar", // Bar chart
        data: data,
        options: {
            responsive: true, // Ensure the chart is responsive
            maintainAspectRatio: false, // Allow the chart to adapt to the container
            scales: {
                y: {
                    beginAtZero: true, // Ensure the Y-axis starts at zero
                    ticks: {
                        precision: 0, // Show whole numbers on Y-axis
                    },
                    grid: {
                        color: "rgba(0, 0, 0, 0.1)", // Gridline color
                    },
                },
                x: {
                    ticks: {
                        autoSkip: true, // Skip labels to prevent crowding
                        maxTicksLimit: 12, // Maximum number of ticks on the X-axis
                    },
                    grid: {
                        display: false, // Hide gridlines on the X-axis
                    },
                    barPercentage: 0.9, // Adjust bar width to prevent crowding
                },
            },
            plugins: {
                legend: {
                    display: true, // Show the legend
                    position: "top", // Legend position
                },
                title: {
                    display: true, // Show the title
                    text: "Profit", // Title text
                    font: {
                        size: 16, // Font size for the title
                    },
                    padding: {
                        top: 10, // Padding at the top
                        bottom: 10, // Padding at the bottom
                    },
                    color: 'black', // Color of the title text
                },
                tooltip: {
                    enabled: true, // Enable tooltips
                    mode: "index", // Grouped tooltip mode
                    intersect: false, // Tooltip appears even if cursor doesn't directly touch a bar
                },
            },
        },
    });
});
*/
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("barChart").getContext("2d");

    // Sample data for weeks (replace with your actual data)
    const weekData = {
        January: [100, 200, 150, 250], // Example data for January in weeks
        February: [150, 180, 200, 220],
        March: [120, 160, 180, 190],
        April: [200, 220, 240, 260],
        May: [180, 190, 210, 230],
        June: [150, 170, 190, 200],
        July: [170, 190, 210, 230],
        August: [200, 210, 230, 250],
        September: [180, 200, 220, 240],
        October: [190, 210, 230, 250],
        November: [220, 240, 260, 280],
        December: [210, 230, 250, 270],
    };

    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];

    const data = {
        labels: months, // X-axis labels for all months
        datasets: [
            {
                label: "Monthly Profit", // Label for the dataset
                data: [300, 500, 400, 700, 600, 450, 550, 650, 700, 750, 800, 850], // Example data for 12 months
                backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
                borderColor: "rgba(75, 192, 192, 1)", // Border color
                borderWidth: 1, // Border width
            },
        ],
    };

    const barChart = new Chart(ctx, {
        type: "bar", // Bar chart
        data: data,
        options: {
            responsive: true, // Ensure the chart is responsive
            maintainAspectRatio: false, // Allow the chart to adapt to the container
            scales: {
                y: {
                    beginAtZero: true, // Ensure the Y-axis starts at zero
                    ticks: {
                        precision: 0, // Show whole numbers on Y-axis
                    },
                    grid: {
                        color: "rgba(0, 0, 0, 0.1)", // Gridline color
                    },
                },
                x: {
                    ticks: {
                        autoSkip: true, // Skip labels to prevent crowding
                        maxTicksLimit: 12, // Maximum number of ticks on the X-axis
                    },
                    grid: {
                        display: false, // Hide gridlines on the X-axis
                    },
                    barPercentage: 0.9, // Adjust bar width to prevent crowding
                },
            },
            plugins: {
                legend: {
                    display: true, // Show the legend
                    position: "top", // Legend position
                },
                title: {
                    display: true, // Show the title
                    text: "Profit", // Title text
                    font: {
                        size: 16, // Font size for the title
                    },
                    padding: {
                        top: 10, // Padding at the top
                        bottom: 10, // Padding at the bottom
                    },
                    color: 'gray', // Color of the title text
                },
                tooltip: {
                    enabled: true, // Enable tooltips
                    mode: "index", // Grouped tooltip mode
                    intersect: false, // Tooltip appears even if cursor doesn't directly touch a bar
                },
            },
        },
    });

    // Add click event listener to the chart
    ctx.canvas.addEventListener('click', function (evt) {
        const activePoints = barChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
        if (activePoints.length > 0) {
            const index = activePoints[0].index; // Get the index of the clicked bar
            const month = months[index]; // Get the month corresponding to the clicked bar
            if (weekData.hasOwnProperty(month)) {
                // If week data exists for the clicked month, update the chart with week data
                barChart.data.labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
                barChart.data.datasets[0].data = weekData[month];
                barChart.update();
            }
        }
    });
});