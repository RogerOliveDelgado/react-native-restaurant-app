import { configureStore } from "@reduxjs/toolkit";
import availableCartSlice from "./slices/availableCart-slice";
import favouriteCartSlice from "./slices/favouriteCart-slice";
import visitedCartSlice from "./slices/visitedCart-slice";

const store = configureStore({
  reducer: {
    availableCart: availableCartSlice.reducer,
    favouriteCart: favouriteCartSlice.reducer,
    visitedCart: visitedCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
