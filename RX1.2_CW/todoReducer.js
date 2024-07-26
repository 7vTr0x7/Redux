import { TODO_ADD, TODO_REMOVE } from "./action.js";
const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index != action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
