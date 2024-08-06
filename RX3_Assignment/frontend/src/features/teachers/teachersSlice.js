import { createSlice } from "@reduxjs/toolkit";

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [
      {
        _id: "1",
        name: "mr. shinde",
        age: 55,
        gender: "Male",
        subject: "Python",
      },
    ],
  },
  reducers: {
    addTeacher: (state, action) => {
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    },
    deleteTeacher: (state, action) => {
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher._id !== action.payload
        ),
      };
    },
    updateTeacher: (state, action) => {
      const teacherIndex = state.teachers.findIndex(
        (teacher) => teacher._id == action.payload.id
      );
      console.log(teacherIndex);
      state.teachers[teacherIndex] = action.payload.teacher;
    },
  },
});

export const { addTeacher, deleteTeacher, updateTeacher } =
  teachersSlice.actions;
