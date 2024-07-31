import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(
    "https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks"
  );
  return res.data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "Success";
      state.tasks = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "Error";
      state.tasks = action.payload.message;
    });
  },
});

export const { toggleStatus } = taskSlice.actions;

export default taskSlice.reducer;
