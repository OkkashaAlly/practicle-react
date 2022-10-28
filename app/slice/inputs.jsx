import { createSlice } from "@reduxjs/toolkit";

export const isEmpty = (obj) =>
  obj === undefined || obj === null || obj === "" ? true : false;

const getId = (id) => id && id.replace(" ", "").toLowerCase();

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    data: [],
  },
  reducers: {
    setInput: (state, action) => {
      var array = action.payload;
      if (!isEmpty(array)) {
        array.map((item) => {
          var id = getId(item.label);
          var object = { id, value: "" };
          return state.data.push(object);
        });
      }
    },
    getData: (state, action) => {
      const { id, value } = action.payload;
      var array = state.data;
      if (!isEmpty(array)) {
        array.map((item) => {
          item.id === id && (item.value = value);
          return item;
        });
      }
    },
  },
});

export const { getData, setInput } = inputSlice.actions;

export default inputSlice.reducer;
