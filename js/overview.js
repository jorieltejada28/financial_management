// Define the labels for the months
const chartLabels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Define data for total revenue
const revenueData = [
    2000, 8000, 6000, 6500, 5000, 5500,
    6000, 6500, 7000, 8000, 8500, 5000
];

// Define the data structure for the chart, focusing only on Total Revenue
const chartData = {
    labels: chartLabels,
    datasets: [
        {
            label: 'Total Revenue',
            data: revenueData,
            borderColor: 'blue',
            borderWidth: 3,
            fill: false,
        },
    ],
};

// Define options for the chart
const chartOptions = {
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
    },
};

// Initialize the line chart with the defined data and options
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions,
});