import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceOptions } from "@reduxjs/toolkit";
import { Restaurant } from "../../interfaces/RestaurantEntity";
import { CartState } from "../../interfaces/AppState";


//We should call the API/backend to carry the information
const initialCartState: CartState = {
  itemList: [],
  changed: true,
};

const favouriteCartSlice = createSlice({
  name: "favouriteCart",
  initialState: initialCartState,
  reducers: {
    updateData(
      state: CartState,
      action: PayloadAction<{ itemList: Restaurant[]; totalQty: number }>
    ) {
      state.itemList = action.payload.itemList;
    },
    addToCart(state: CartState, action: PayloadAction<{ item: Restaurant }>) {
      state.changed = true;
      state.itemList.push(action.payload.item);
    },
    removeFromCart(state: CartState, action: PayloadAction<{ id: number }>) {
      state.changed = true;
      state.itemList = state.itemList.filter(
        (element) => element.id !== action.payload.id
      );
    },
  },
});

export const favouriteCartActions = favouriteCartSlice.actions

export default favouriteCartSlice;
