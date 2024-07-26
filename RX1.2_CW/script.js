import { createStore } from "https://cdn.skypack.dev/redux";
import todoReducer from "./todoReducer.js";
import { addTodo, removeTodo } from "./action.js";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  updateTodoList();
});

const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const addTodoBtn = document.querySelector("#addTodo");

const addTodoHandler = () => {
  const todo = todoInput.value;
  if (todo) {
    store.dispatch(addTodo(todo));
  }
};

addTodoBtn.addEventListener("click", addTodoHandler);

window.removeTodo = (index) => {
  store.dispatch(removeTodo(index));
};

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li key={${index}}>${todo} <button onClick="removeTodo(${index})">Remove</button> </li>`;
    })
    .join("");
};

updateTodoList();
