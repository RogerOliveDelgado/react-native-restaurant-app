import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { VisitedStack } from "../components/MainPageStacks/VisitedStack";
import { WishListStack } from "../components/MainPageStacks/WishListStack";
import { HomeStack } from "../components/MainPageStacks/HomeStack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        )
      }} />
      <Tab.Screen name="WishListStack" component={WishListStack} options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26}/>
        )
      }} />
      <Tab.Screen name="VisitedStack" component={VisitedStack} options={{
        tabBarLabel: 'Visited',
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="square" color={color} size={26}/>
        )
      }} />
    </Tab.Navigator>
  );
};
