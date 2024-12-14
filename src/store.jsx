import { configureStore } from "@reduxjs/toolkit";
import CourseSliceRedux from "./Components/CourseShopSlice.jsx";
export const store = configureStore({
  reducer: {
    coursesShop: CourseSliceRedux,
  },
});
