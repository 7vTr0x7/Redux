import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  try {
    const res = await fetch("http://localhost:4000/students");
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log("Error While fetching");
  }
});

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
});

export default studentSlice;
