document.addEventListener("DOMContentLoaded", function() {
    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Total Income',
                data: [0, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650], // Example data
                borderColor: 'green',
                borderWidth: 3,
                fill: false, // If you don't want the area under the line to be filled
            },
            {
                label: 'Total Expenses',
                data: [0, 60, 70, 80, 100, 120, 150, 180, 200, 250, 300, 350], // Example data
                borderColor: 'red',
                borderWidth: 3,
                fill: false,
            },
            {
                label: 'Total Savings',
                data: [0, 90, 130, 170, 200, 230, 250, 270, 300, 320, 350, 370], // Example data
                borderColor: 'blue',
                borderWidth: 3,
                fill: false,
            },
            {
                label: 'Total Investments',
                data: [0, 50, 70, 100, 120, 150, 180, 200, 230, 250, 300, 320], // Example data
                borderColor: 'orange',
                borderWidth: 3,
                fill: false,
            },
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0, // Ensure whole numbers on y-axis
                },
            },
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 12,
                },
            },
        },
        elements: {
            line: {
                tension: 0.4, // Adjusts the line smoothness
            },
        },
        responsive: true, // Ensures responsiveness
        maintainAspectRatio: false, // Allows chart to expand/contract with container
        plugins: {
            legend: {
                position: 'top', // Positions the legend at the top
                labels: {
                    usePointStyle: true, // Use point symbols in the legend
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            title: {
                display: true, // Display the title
                text: 'Revenue', // Title text
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
    };

    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
    });
});
