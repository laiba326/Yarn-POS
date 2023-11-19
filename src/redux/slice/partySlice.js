import { createSlice } from "@reduxjs/toolkit";
const partySlice = createSlice({
  name: "party",
  initialState: {
    parties: null,
  },
  reducers: {
    addParties: (state, action) => {
      state.parties = action.payload;
    },
  },
});

export const { addParties } = partySlice.actions;
export default partySlice.reducer;
