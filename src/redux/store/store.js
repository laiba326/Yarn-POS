import { configureStore } from "@reduxjs/toolkit";
import party from "../slice/slice";

export default configureStore({
  reducer: { party },
});
