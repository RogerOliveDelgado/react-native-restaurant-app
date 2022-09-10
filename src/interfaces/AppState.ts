import { Restaurant } from "./RestaurantEntity";

export interface AppState {
  darkMode: boolean;
  availableRestaurants: Restaurant[];
  favouriteRestaurants: Restaurant[];
  visitedRestaurants: Restaurant[];
}

export type CartState = {
  itemList: Restaurant[];
  changed: boolean;
};
