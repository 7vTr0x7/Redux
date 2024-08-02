import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const res = await axios.get("http://localhost:4000/students");
  return res.data;
});

export const addStudentAsync = createAsyncThunk(
  "students/addStudentAsync",
  async (student) => {
    const res = await axios.post("http://localhost:4000/students", student, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudentAsync",
  async (data) => {
    console.log(data.id);
    console.log(data.newStudent);
    const res = await axios.put(
      `http://localhost:4000/students/${data.id}`,
      data.newStudent,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await res.data;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "deleteStudent",
  async (id) => {
    const res = await axios.delete(`http://localhost:4000/students/${id}`);
    return await res.data;
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addStudent: (state, action) => {
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
    builder.addCase(updateStudentAsync.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(updateStudentAsync.fulfilled, (state, action) => {
      state.status = "Success";
      state.students = action.payload;
    });
    builder.addCase(updateStudentAsync.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.payload.message;
    });
  },
});

export const { addStudent } = studentsSlice.actions;
