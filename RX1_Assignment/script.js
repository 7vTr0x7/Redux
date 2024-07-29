import { createStore } from "https://cdn.skypack.dev/redux";
import taskReducer from "./taskReducer.js";
import { addTask, calculateTotalTasks } from "./action.js";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const addTaskToStore = (task) => {
  store.dispatch(addTask(task));
};

const calculateTotal = () => {
  store.dispatch(calculateTotalTasks());
};

const totalTasks = document.querySelector("#totalTasks");

const updateTotalTasks = () => {
  const state = store.getState();
  totalTasks.textContent = `Total Tasks: ${state.totalTasks}`;
};

const addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");

  const state = store.getState();
  const id = state.totalTasks + 1;

  const newTask = {
    id: id,
    title: title.value,
    description: description.value,
    completed: false,
  };

  addTaskToStore(newTask);
  calculateTotal();
});

const taskList = document.querySelector("#taskList");

const updateTaskList = () => {
  const state = store.getState();

  if (state.tasks.length > 0)
    taskList.innerHTML = state.tasks
      .map(
        (task) => `<li key={task.id}>
    <input type="checkbox" id="${task.id}" />
    <label>${task.id}. ${task.title} - ${task.description}${
          task.completed ? ": Completed" : ""
        }</label>
    </li>`
      )
      .join("");
};

store.subscribe(() => {
  updateTotalTasks();
  updateTaskList();
});
