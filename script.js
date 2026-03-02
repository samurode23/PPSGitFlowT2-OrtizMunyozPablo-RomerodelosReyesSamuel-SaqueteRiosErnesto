const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function updateAddButton() {
  addBtn.disabled = taskInput.value.trim() === "";
}

updateAddButton();
taskInput.addEventListener("input", updateAddButton);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  span.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  li.appendChild(span);
  taskList.appendChild(li);
  const del = document.createElement("button");
del.className = "deleteBtn";
del.textContent = "Eliminar";


del.addEventListener("click", () => {
  li.remove()
});

li.appendChild(del);
  taskInput.value = "";
  updateAddButton();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
