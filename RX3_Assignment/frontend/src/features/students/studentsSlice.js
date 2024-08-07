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
    filter: "All",
    sortBy: "name",
  },
  reducers: {
    addStudentAsync: (state, action) => {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    },
    updateStudentAsync: (state, action) => {
      const index = state.students.findIndex(
        (stud) => stud._id === action.payload.id
      );

      state.students[index] = action.payload.newStudent;
    },
    deleteStudentAsync: (state, action) => {
      return {
        ...state,
        students: state.students.filter((stud) => stud._id !== action.payload),
      };
    },
    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    setSortBy: (state, action) => {
      return {
        ...state,
        sortBy: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.status = "Success";
      if (state.students.length === 0) {
        state.students = action.payload;
      } else {
        return state;
      }
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.status = "Error";
      if (action?.payload?.message) {
        state.error = action.payload.message;
      }
    });
  },
});

export const {
  setFilter,
  addStudentAsync,
  updateStudentAsync,
  deleteStudentAsync,
  setSortBy,
} = studentsSlice.actions;
