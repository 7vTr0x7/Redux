import { createSlice } from "@reduxjs/toolkit";

export const schoolSlice = createSlice({
  name: "school",
  initialState: {
    stats: {},
  },
  reducers: {
    updateSchoolStats: (state, action) => {
      return {
        ...state,
        stats: action.payload,
      };
    },
    setTopStudent: (state, action) => {
      return {
        ...state,
        stats: { ...state.stats, topStudent: action.payload },
      };
    },
  },
});

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions;
