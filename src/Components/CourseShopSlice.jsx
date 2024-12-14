import { createSlice } from "@reduxjs/toolkit";
import { courseItems } from "../Data/CourseData";

const initialState = {
  courses: [],
  totalCourse: 0,
  totalAmount: 0,
};
export const CourseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.totalCourse += 1;
      const result = state.courses.find((course) => {
        // debugger;
        return course.id === action.payload.id;
      });
      if (result) {
        state.courses = state.courses.map((course) =>
          course.id === result.id
            ? { ...course, quantity: course.quantity + 1 }
            : course
        );
      } else {
        state.courses = [...state.courses, { ...action.payload, quantity: 1 }];
      }
    },
    decrement: (state, action) => {
      state.totalCourse -= 1;

      const result = state.courses.find((course) => {
        // debugger;
        return course.id === action.payload.id;
      });
      if (result) {
        state.courses = state.courses.map((course) =>
          course.id === result.id
            ? { ...course, quantity: course.quantity - 1 }
            : course
        );
      } else {
      }
    },
    totalAmount: (state) => {
      let amount = 0;
      state.courses.forEach((kurs) => {
        amount = amount + kurs.quantity * kurs.price;
      });
      state.totalAmount = amount;
    },
  },
});

export const { increment, decrement, totalAmount } = CourseSlice.actions;
export default CourseSlice.reducer;
