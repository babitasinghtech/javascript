let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const deletedTableBody = document.getElementById('deletedTableBody');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
}

// Render deleted tasks
function renderDeletedTasks() {
    deletedTableBody.innerHTML = '';

    deletedTasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td style="color: ${task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'orange' : 'green'}">
                ${task.priority}
            </td>
            <td>${task.status}</td>
            <td><button onclick="restoreTask(${index})">Restore</button></td>
            <td><button onclick="deleteForever(${index})">Delete Forever</button></td>
        `;
        deletedTableBody.appendChild(row);
    });
}

// Restore task
function restoreTask(index) {
    const taskToRestore = deletedTasks.splice(index, 1)[0];
    tasks.push(taskToRestore);
    saveTasks();
    renderDeletedTasks();
}

// Permanently delete
function deleteForever(index) {
    deletedTasks.splice(index, 1);
    saveTasks();
    renderDeletedTasks();
}

// Initial load
renderDeletedTasks();
