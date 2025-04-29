// Отримуємо посилання на елементи з DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Функція додавання задачі
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Будь ласка, введіть задачу.");
        return;
    }

    // Створення елементів списку
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Додаємо можливість відмітки як виконаної
    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    // Створення кнопки видалення
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Щоб не спрацьовувала подія завершення
        taskList.removeChild(listItem);
    });

    // Додаємо кнопку до задачі
    listItem.appendChild(deleteButton);

    // Додаємо елемент до списку
    taskList.appendChild(listItem);

    // Очищаємо поле вводу
    taskInput.value = "";
}

// Обробник натискання кнопки
addTaskButton.addEventListener("click", addTask);

// Додаємо можливість додати задачу клавішею Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});