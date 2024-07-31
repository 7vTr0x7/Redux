import { createSlice } from "@reduxjs/toolkit";
import { axios } from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(
    "https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks"
  );
  console.log(res);
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        date: "15/07/2024",
        tasks: [
          {
            taskId: "1",

            description: "Get groceries from the market.",
            status: "Pending",
          },
          {
            taskId: "2",

            description: "Go to gym.",
            status: "Completed",
          },
          {
            taskId: "4",

            description: "Water the plants.",
            status: "Completed",
          },
        ],
      },
      {
        date: "16/07/2024",
        tasks: [
          {
            taskId: "5",

            description: "Go to the park.",
            status: "Completed",
          },
          {
            taskId: "6",

            description: "Get my room cleaned",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleStatus: (state, action) => {
      const todos = state.tasks.map((task) => {
        const todoTasks = task.tasks.map((task) => {
          if (task.taskId === action.payload) {
            if (task.status === "Completed") {
              task.status = "Pending";
            } else {
              task.status = "Completed";
            }
          }
        });
      });
    },
  },
});

export const { toggleStatus } = taskSlice.actions;

export default taskSlice.reducer;
