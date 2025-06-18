import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Mutating the state here (Redux-Toolkit uses Immer BTS)
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      // RTK ==> either mutate the existing-state or return a new state
      // state.items = [];   //not mutating the state, just creating a new array-reference
      // state.items.length = 0;   // in-place mutation, i.e clearing the existing array
      return { items: [] }; // it will replace the existing-original-state to an empty-object (new state -> {items: []})
    },
  },
});

//we export 2 things (actions and reducer) from cartSlice

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
