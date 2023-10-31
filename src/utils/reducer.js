import { SET_FILTER, LIKE_QUOTE, DELETE_QUOTE, SAVE_QUOTES } from "./types";

const stateInitial = { simpsons: [], filter: "" };

export const reducer = (state = stateInitial, action) => {
  switch (action.type) {
    case SAVE_QUOTES: {
      const _state = { ...state };
      _state.simpsons = action.payload;
      return _state;
    }
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case LIKE_QUOTE: {
      const _simpsons = [...state.simpsons];
      const _simpsons_new = _simpsons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, liked: !item.liked };
        } else {
          return { ...item };
        }
      });
      return { ...state, simpsons: _simpsons_new };
    }
    case DELETE_QUOTE: {
      const _simpsons = [...state.simpsons];
      return { ...state, simpsons: _simpsons.filter((item) => item.id !== action.payload) };
    }
  }
  return state;
};
