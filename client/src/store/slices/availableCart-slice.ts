import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceOptions } from "@reduxjs/toolkit";
import { Restaurant } from "../../interfaces/RestaurantEntity";
import { CartState } from "../../interfaces/AppState";

//We should call the API/backend to carry the information
const initialCartState: CartState = {
  itemList: [],
  changed: true,
};

const availableCartSlice = createSlice({
  name: "availableCart",
  initialState: initialCartState,
  reducers: {
    updateData(
      state: CartState,
      action: PayloadAction<Restaurant[]>
    ) {
      state.itemList = action.payload;
    },
    addToCart(state: CartState, action: PayloadAction<Restaurant>) {
      state.changed = true;
      state.itemList.push(action.payload);
    },
    removeFromCart(state: CartState, action: PayloadAction<number>) {
      state.changed = true;
      state.itemList = state.itemList.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export const availableCartActions = availableCartSlice.actions;

export default availableCartSlice;
