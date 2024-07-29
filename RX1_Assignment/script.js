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
calculateTotal();

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
  };

  addTaskToStore(newTask);

  updateTotalTasks();
});

store.subscribe(() => {
  updateTotalTasks();
});
