import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
  name: "",
  initialState: {
    xyz: null,
  },
  reducers: {
    addProperty: (state, action) => {
      state.xyz = action.payload;
    },
  },
});

export const { addProperty } = Slice.actions;
export default Slice.reducer;
