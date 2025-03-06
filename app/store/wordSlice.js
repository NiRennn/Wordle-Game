// wordSlice.js
import { createSlice } from "@reduxjs/toolkit";
import words from "../words.js";


const initialState = {
  guess: "Палка",
  rows: Array(6).fill("").map(() => Array(5).fill({ letter: "", color: "", flipped: false })),
  activeRow: 0,
  activeCell: 0,
  keyColors: {},
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {

    setActiveRow: (state, action) => {
      state.activeRow = action.payload;
    },
    setActiveCell: (state, action) => {
      state.activeCell = action.payload;
    },
    updateRows: (state, action) => {
      state.rows = action.payload;
    },
    setKeyColors: (state, action) => {
      state.keyColors = { ...state.keyColors, ...action.payload };
    },
    setWord: (state,action ) => {
      state.guess = action.payload;
    },
    updateKeyColor: (state, action) => {
      const { key, color } = action.payload;
      state.keyColors[key] = color;
    },
  },
});

export const { setActiveRow, setActiveCell, updateRows, setKeyColors, setWord, updateKeyColor  } = wordSlice.actions;
export default wordSlice.reducer;
