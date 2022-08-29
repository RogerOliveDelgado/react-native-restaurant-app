import React from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantsList from "./../../db/restaurant.json";

export const HomeStack = () => {
  return (
    <ScrollView>
      <View>
        {RestaurantsList.map((restaurant) => <RestaurantCard {...restaurant}/>)}
      </View>
    </ScrollView>
  );
};
