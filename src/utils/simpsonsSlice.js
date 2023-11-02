import { createSlice } from "@reduxjs/toolkit";

const initialState = { simpsons: [], filter: "", loaded: false };

const simpsonsSlice = createSlice({
  name: "simpsons",
  initialState,
  reducers: {
    saveQuotes: (state, action) => {
      state.simpsons = action.payload;
      state.loaded = true;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    likeQuote: (state, action) => {
      const index = state.simpsons.findIndex((item) => item.id === action.payload);
      state.simpsons[index].liked = !state.simpsons[index].liked;
    },
    deleteQuote: (state, action) => {
      const index = state.simpsons.findIndex((item) => item.id === action.payload);
      state.simpsons.splice(index, 1);
    },
  },
});

export const { saveQuotes, setFilter, likeQuote, deleteQuote } = simpsonsSlice.actions;
export default simpsonsSlice.reducer;

export const selectSimpsons = (state) => state.simpsons.simpsons;
export const selectFilter = (state) => state.simpsons.filter;
export const selectLoaded = (state) => state.simpsons.loaded;
