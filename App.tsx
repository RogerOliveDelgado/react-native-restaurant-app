import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import LateralMenu from './src/navigation/LateralMenu';

export default function App() {
  return (
    <NavigationContainer>
      <LateralMenu></LateralMenu>
    </NavigationContainer>
  );
}