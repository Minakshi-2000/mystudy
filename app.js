// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    // Add task content
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    // Append task to the task list
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Function to edit a task
function editTask(button) {
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    
    // Get the current task text
    const currentText = taskTextElement.textContent;
    
    // Prompt user to enter new task text
    const newText = prompt("Edit task:", currentText);
    
    if (newText === null || newText.trim() === "") {
        alert("Task text cannot be empty!");
    } else {
        taskTextElement.textContent = newText.trim();
    }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add task when pressing Enter key
taskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
