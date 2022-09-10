import React from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantsList from "./../../db/restaurant.json";
import { Restaurant } from "../../interfaces/RestaurantEntity";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import uuid from "react-native-uuid";

export const HomeStack = (): JSX.Element => {
  return (
    <ScrollView>
      <View>
        {RestaurantsList.map((restaurant: Restaurant) => (
          <React.Fragment key={uuid.v4() as any}>
            <RestaurantCard {...restaurant} />
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};
