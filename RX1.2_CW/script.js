import { createStore } from "https://cdn.skypack.dev/redux";
import todoReducer from "./todoReducer.js";
import { addTodo } from "./action.js";

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
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

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li key={${index}}>${todo}</li>`;
    })
    .join("");
};

updateTodoList();
