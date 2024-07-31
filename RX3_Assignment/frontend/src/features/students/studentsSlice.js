import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  try {
    const res = await fetch("http://localhost:4000/students");
    const data = await res.json();
    return data
  } catch (error) {
    console.log("Error While fetching");
  }
});

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
});
