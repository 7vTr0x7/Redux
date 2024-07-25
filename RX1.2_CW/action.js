export const TODO_ADD = "todo/added";
export const TODO_REMOVE = "todo/removed";

export const addTodo = (text) => ({
  type: TODO_ADD,
  payload: text,
});

export const removeTodo = (index) => ({
  type: TODO_REMOVE,
  payload: index,
});
