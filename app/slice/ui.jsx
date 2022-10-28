import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav: false,
  toggle: false,
  disclaimer: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNav: (state, action) => {
      var { toggle } = action.payload;
      state.nav = toggle !== 0 ? toggle : !state.nav;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
    disclaimer(state) {
      state.disclaimer = !state.disclaimer;
    },
  },
});

export const { toggle, disclaimer, toggleNav } = uiSlice.actions;

export default uiSlice.reducer;
