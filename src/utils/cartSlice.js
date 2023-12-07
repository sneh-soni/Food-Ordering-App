import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      for (let index = 0; index < array.length; index++) {
        if (state.items[index] == action.payload) {
          state.items.splice(index, 1);
          break;
        }
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
