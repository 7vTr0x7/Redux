import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const res = await axios.get("http://localhost:4000/students");
  return res.data;
});

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addStudentAsync: (state, action) => {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.status = "Success";
      state.students = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.payload.message;
    });
  },
});

export const { addStudentAsync } = studentsSlice.actions;
