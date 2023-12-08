import { configureStore } from "@reduxjs/toolkit";
import party from "../slice/partySlice";
import partyOptionSlice from "../slice/partyOptionSlice";
export default configureStore({
  reducer: { party, partyOptionSlice },
});
