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

export type AlertType =
  | "main"
  | "bookings"
  | "notifications"
  | "settings"
  | "profile"

export type AlertState = Record<AlertType, number>;