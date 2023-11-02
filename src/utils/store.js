import { configureStore } from "@reduxjs/toolkit";

import simpsonsReducer from "./simpsonsSlice";

export const store = configureStore({
  reducer: {
    simpsons: simpsonsReducer,
  },
});
