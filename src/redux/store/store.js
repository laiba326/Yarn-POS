import { configureStore } from "@reduxjs/toolkit";
import party from "../slice/partySlice";

export default configureStore({
  reducer: { party },
});
