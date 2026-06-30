// ===============================
// Select Elements
// ===============================

const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("task-container");

// ===============================
// Load Tasks
// ===============================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===============================
// Save Tasks
// ===============================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

// ===============================
// Render Tasks
// ===============================

function renderTasks() {

    taskContainer.innerHTML = "";

    if (tasks.length === 0) {

        taskContainer.innerHTML = `
            <p class="empty">
                No Tasks Available
            </p>
        `;

        return;
    }

    tasks.forEach((task) => {

        const taskDiv = document.createElement("div");

        taskDiv.className = "task";

        taskDiv.innerHTML = `

            <span class="task-title">
                ${task.title}
            </span>

            <div class="task-actions">

                <button class="delete-btn">
                    Delete
                </button>

            </div>

        `;

        // Delete Button
        const deleteBtn =
            taskDiv.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", () => {

            deleteTask(task.id);

        });

        taskContainer.appendChild(taskDiv);

    });

}

// ===============================
// Add Task
// ===============================

function addTask() {

    const title = input.value.trim();

    if (title === "") {

        alert("Please enter a task.");

        return;

    }

    const task = {

        id: Date.now(),

        title,

        completed: false

    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    input.value = "";

    input.focus();

}

// ===============================
// Delete Task
// ===============================

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();

}

// ===============================
// Events
// ===============================

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        addTask();

    }

});

// ===============================
// Initial Load
// ===============================

renderTasks();