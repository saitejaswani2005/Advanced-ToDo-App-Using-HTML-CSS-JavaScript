function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  document.getElementById("pendingList").appendChild(li);
  taskInput.value = "";
}

function completeTask(button) {
  let li = button.parentElement.parentElement;
  li.classList.add("completed");
  button.remove();
  document.getElementById("completedList").appendChild(li);
}

function deleteTask(button) {
  let li = button.parentElement.parentElement;
  li.remove();
}
