import {
  ADD_TASK,
  CALCULATE_TOTAL_TASKS,
  REMOVE_TASK,
  TOGGLE_TASK,
} from "./action.js";

const initialState = { tasks: [], totalTasks: 0 };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => action.payload != task.id),
      };

    case CALCULATE_TOTAL_TASKS:
      return {
        ...state,
        totalTasks: state.tasks.length,
      };
  }
};

export default taskReducer;
