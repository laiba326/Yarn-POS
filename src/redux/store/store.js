import { configureStore } from "@reduxjs/toolkit";
import party from "../slice/partySlice";
import sku from "../slice/skuSlice";

export default configureStore({
  reducer: { party, sku },
});
