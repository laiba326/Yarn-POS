import { createSlice } from "@reduxjs/toolkit";
const partyOptionSlice = createSlice({
  name: "partyOption",
  initialState: {
    partiesOption: null,
  },
  reducers: {
    addPartiesOption: (state, action) => {
      state.partiesOption = action.payload;
    },
  },
});

export const { addPartiesOption } = partyOptionSlice.actions;
export default partyOptionSlice.reducer;
