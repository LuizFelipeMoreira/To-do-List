const inputTask = document.querySelector(".new-task-input");
const buttonTask = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".new-task");

const validateInput = () => inputTask.value.trim().length > 0;

function addTask() {
  const inputIsValid = validateInput();
  if (!inputIsValid) {
    return inputTask.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputTask.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () =>
    handleDelete(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  taskContainer.appendChild(taskItemContainer);
}

const handleClick = (taskContent) => {
  const tasks = taskContainer.childNodes;
  for (const task of tasks) {
    const currentTaskBeingClicked = task.firstChild.isSameNode(taskContent);
    if (currentTaskBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDelete = (taskItemContainer, taskContent) => {
  const tasks = taskContainer.childNodes;
  for (const task of tasks) {
    const currentTaskBeingClicked = task.firstChild.isSameNode(taskContent);
    if (currentTaskBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

function handleInput() {
  const inputIsValid = validateInput();
  if (inputIsValid) {
    return inputTask.classList.remove("error");
  }
}

buttonTask.addEventListener("click", addTask);
inputTask.addEventListener("change", handleInput);
