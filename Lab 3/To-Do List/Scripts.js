const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Enter the task!");
    return;
  }

  const taskItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskTextNode = document.createElement("span");
  taskTextNode.textContent = taskText;

  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = "🗑";
  deleteButton.classList.add("delete-btn");

  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextNode);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
