document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"),
        modeToggle = body.querySelector(".mode-toggle"),
        sidebar = body.querySelector("nav"),
        sidebarToggle = body.querySelector(".sidebar-toggle"),
        fullNameSpan = body.querySelector(".full-name .full_name"),
        graphContainers = document.querySelectorAll(".graph-container"),
        notificationIcon = body.querySelector(".notification-icon"),
        messageIcon = body.querySelector(".message-icon");

    // Function to handle notification icon click
    function handleNotificationClick() {
        // Add your notification logic here
        console.log("Notification icon clicked");
    }

    // Function to handle message icon click
    function handleMessageClick() {
        // Add your message logic here
        console.log("Message icon clicked");
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
            // Add 'dark' class to graph containers
            graphContainers.forEach(container => {
                container.classList.add("dark");
            });
        } else {
            localStorage.setItem("mode", "light");
            // Remove 'dark' class from graph containers
            graphContainers.forEach(container => {
                container.classList.remove("dark");
            });
        }
    }

    // Load stored mode and sidebar status from localStorage
    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark") {
        body.classList.add("dark");
        // Add 'dark' class to graph containers
        graphContainers.forEach(container => {
            container.classList.add("dark");
        });
    }

    let getStatus = localStorage.getItem("status");
    if (getStatus && getStatus === "close") {
        sidebar.classList.add("close");
        fullNameSpan.style.opacity = "0"; // Hide the name when the sidebar is closed
    } else {
        fullNameSpan.style.opacity = "1"; // Show the name when the sidebar is open
    }

    // Event listener for dark mode toggle
    modeToggle.addEventListener("click", toggleDarkMode);

    // Toggle sidebar open/close and adjust the opacity of the full_name span
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
        if (sidebar.classList.contains("close")) {
            localStorage.setItem("status", "close");
            fullNameSpan.style.opacity = "0"; // Hide the name when the sidebar is closed
        } else {
            localStorage.setItem("status", "open");
            fullNameSpan.style.opacity = "1"; // Show the name when the sidebar is open
        }
    });

    // Event listener for notification icon click
    notificationIcon.addEventListener("click", handleNotificationClick);

    // Event listener for message icon click
    messageIcon.addEventListener("click", handleMessageClick);

    // Get references to HTML elements
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.sender-container');
    const chatBox =  document.getElementById('chat-messages');

    // Function to handle sending messages
    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageDiv = document.createElement('div');
            messageDiv.setAttribute("class", "message-sender");

            const messageIn = document.createElement("div");
            messageIn.setAttribute("class", "text");
            messageIn.textContent = messageInput.value;

            chatMessages.appendChild(messageDiv);
            messageDiv.appendChild(messageIn);

            // Clear the input field after sending the message
            messageInput.value = '';
            // Scroll to the bottom to show the latest message
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // Event listener for send button click
    sendButton.addEventListener('click', sendMessage);

    // Event listener for pressing Enter key
    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    const addButton = document.getElementById('add-budget');
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const budgetTableBody = document.getElementById('budget-body');

    addButton.addEventListener('click', () => {
        const category = categoryInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());

        if (category !== '' && !isNaN(amount) && amount > 0) {
            // Create new row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${category}</td>
                <td>${amount}</td>
                <td><button class="delete-button">Delete</button></td>
            `;

            // Add row to the table
            budgetTableBody.appendChild(newRow);

            // Clear input fields
            categoryInput.value = '';
            amountInput.value = '';

            // Attach event listener to delete button
            const deleteButton = newRow.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                newRow.remove();
            });
        } else {
            alert('Please enter a valid category and amount.');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-budget');
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const budgetTableBody = document.getElementById('budget-body');

    addButton.addEventListener('click', () => {
        const category = categoryInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());

        if (category !== '' && !isNaN(amount) && amount > 0) {
            // Create new row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${category}</td>
                <td>${amount}</td>
                <td><button class="delete-button">Delete</button></td>
            `;

            // Add row to the table
            budgetTableBody.appendChild(newRow);

            // Clear input fields
            categoryInput.value = '';
            amountInput.value = '';

            // Attach event listener to delete button
            const deleteButton = newRow.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                newRow.remove();
            });
        } else {
            alert('Please enter a valid category and amount.');
        }
    });
});

document.getElementById('add-collection').addEventListener('click', function() {
    const category = document.getElementById('collection-category').value;
    const amount = document.getElementById('collection-amount').value;

    if (category && amount) {
        const table = document.getElementById('collection-body');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${category}</td>
            <td>${amount}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        table.appendChild(row);

        // Clear the input fields
        document.getElementById('collection-category').value = '';
        document.getElementById('collection-amount').value = '';

        // Add event listener to the delete button
        row.querySelector('.delete-btn').addEventListener('click', function() {
            row.remove();
        });
    }
});

document.getElementById('add-account').addEventListener('click', function() {
    const type = document.getElementById('account-type').value;
    const category = document.getElementById('account-category').value;
    const amount = document.getElementById('account-amount').value;
    
    // Validate inputs
    if (type && category && amount) {
        // Create new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${type}</td>
            <td>${category}</td>
            <td>${amount}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        
        // Append row to table body
        const tableBody = document.getElementById('accounts-body');
        tableBody.appendChild(newRow);
        
        // Clear input fields
        document.getElementById('account-type').value = '';
        document.getElementById('account-category').value = '';
        document.getElementById('account-amount').value = '';
        
        // Attach event listener to delete button
        newRow.querySelector('.delete-btn').addEventListener('click', function() {
            newRow.remove();
        });
    } else {
        alert('Please fill in all fields.');
    }
});
