import { createSlice } from "@reduxjs/toolkit";
const skuSlice = createSlice({
  name: "sku",
  initialState: {
    sku: null,
  },
  reducers: {
    addSku: (state, action) => {
      state.sku = action.payload;
    },
  },
});

export const { addSku } = skuSlice.actions;
export default skuSlice.reducer;
