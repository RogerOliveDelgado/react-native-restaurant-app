import { Restaurant } from "../interfaces/RestaurantEntity";
import type { WishList } from "../interfaces/WishlistEntity";

const create = (restaurantList: WishList["Restaurants"]) => ({
  Restaurants: restaurantList,
});
const add = (
  restaurant: Restaurant,
  restaurantList: WishList["Restaurants"]
) => ({ Restaurants: [...restaurantList, restaurant] });
const remove = (target: Restaurant, restaurantList: WishList["Restaurants"]) =>
  restaurantList.filter(
    (restaurant: Restaurant) => restaurant.name !== target.name
  );

export { create, add, remove };
