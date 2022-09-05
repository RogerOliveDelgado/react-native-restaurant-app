import { createStore } from "redux";
import { Restaurant } from "../interfaces/RestaurantEntity";

const restaurantState: Array<Restaurant> = [
  {
    id: 1,
    rating: {
      number: 450,
      avg: 4.5,
      max: 5.0,
    },
    n_comments: 150,
    name: "La Tagliatella",
    type: "Italian",
    tables_available: 15,
    location: "C/ Notifixis",
  },
  {
    id: 2,
    rating: {
      number: 450,
      avg: 4.5,
      max: 5.0,
    },
    n_comments: 150,
    name: "Belle Buon",
    type: "Italian",
    tables_available: 15,
    location: "C/ Notifixis",
  },
];

function restaurantReducer(state = restaurantState, action) {
  switch (action.type) {
    case "addToFavourites":
      return { ...state, 5: action.restaurant };
    case "deleteFromFavourites":
      return state.filter(
        (restaurant) => restaurant.id === action.restaurant.id
      );
    default:
      return state;
  }
}
