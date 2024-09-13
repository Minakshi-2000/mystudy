// Variables for DOM elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks on the page
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-name">${task}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add a new task
addTaskBtn.addEventListener('click', function() {
    const newTask = taskInput.value.trim();
    if (newTask) {
        tasks.push(newTask);
        updateLocalStorage();
        renderTasks();
        taskInput.value = ''; // Clear the input field
    }
});

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
}

// Edit a task
function editTask(index) {
    const newTask = prompt('Edit your task:', tasks[index]);
    if (newTask) {
        tasks[index] = newTask.trim();
        updateLocalStorage();
        renderTasks();
    }
}

// Update localStorage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial render of tasks when page loads
renderTasks();
