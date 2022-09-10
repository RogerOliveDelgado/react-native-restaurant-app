import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import LateralMenu from "./src/navigation/LateralMenu";
import { Provider } from "react-redux";
import store from './src/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LateralMenu></LateralMenu>
      </NavigationContainer>
    </Provider>
  );
}
