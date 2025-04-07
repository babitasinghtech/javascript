const tasks = [
    { name: "Task2", priority: "low", status: "pending" },
    { name: "Task3", priority: "high", status: "pending" },
    { name: "Task3", priority: "high", status: "pending" },
];

const tableBody = document.getElementById("taskTable");
const filterPriority = document.getElementById("filterPriority");

function renderTasks() {
    const selectedPriority = filterPriority.value;
    tableBody.innerHTML = ""; // Clear old rows

    tasks.forEach((task, index) => {
        if (selectedPriority === "all" || task.priority === selectedPriority) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${task.name}</td>
                <td style="color: ${task.priority === 'high' ? 'red' : 'green'}">${task.priority}</td>
                <td>${task.status}</td>
                <td><button onclick="restoreTask(${index})">Restore</button></td>
                <td><button onclick="deleteTask(${index})">Delete</button></td>
            `;

            tableBody.appendChild(row);
        }
    });
}

function restoreTask(index) {
    alert(`${tasks[index].name} restored!`);
    // You can add logic to move task somewhere else
}

function deleteTask(index) {
    tasks.splice(index, 1); // Remove task
    renderTasks(); // Refresh table
}

filterPriority.addEventListener("change", renderTasks);

// Load tasks initially
renderTasks();
