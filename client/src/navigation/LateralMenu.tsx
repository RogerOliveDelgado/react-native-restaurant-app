import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text, View, useWindowDimensions, Image } from "react-native";
import { Bookings } from "../components/Navigation/Bookings";
import { Notifications } from "../components/Navigation/Notifications";
import { Settings } from "../components/Navigation/Settings";
import { Profile } from "../components/Navigation/Profile";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MainScreen } from "../components/Navigation/Main";
import { Badge, Button, Icon } from "@rneui/themed";
import { useAppSelector } from "../store/hooks";

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front",
        headerTitle: "",
        headerRight: RightMenuComponent,
      }}
      drawerContent={(props) => <LateralMenuContent {...props} />}
      initialRouteName="BottomTabNavigator"
    >
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      ></Drawer.Screen>
      <Drawer.Screen name="Bookings" component={Bookings}></Drawer.Screen>
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
      ></Drawer.Screen>
      <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const RightMenuComponent = () => {
  return (
    <Button
      icon={
        <>
          <Icon name="search" color="#020202" />
          {/* <Icon name="person" color="#020202" /> */}
        </>
      }
      buttonStyle={{
        backgroundColor: "transparent",
        borderRadius: 12,
        marginLeft: 0,
        marginRight: 15,
        marginBottom: 0,
      }}
      title=""
    />
  );
};

const LateralMenuContent = ({ navigation }: DrawerContentComponentProps) => {

  const bookinsAlerts = useAppSelector((state) => state.alerts.bookingsAlert);

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif",
          }}
          style={styles.avatar}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.navigate("BottomTabNavigator")}}
        >
          <View style={styles.lateralMenuIconContainer}>
            <Ionicons name="compass-outline" size={26} color="black" />
            <Badge containerStyle={styles.badge} value="10" status="error" />
          </View>
          <Text style={styles.lateralMenuText}>Main</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Bookings")}
        >
          <View style={styles.lateralMenuIconContainer}>
            <Ionicons name="calendar-outline" size={26} color="black" />
            <Badge containerStyle={styles.badge} value={bookinsAlerts} status="error" />
          </View>
          <Text style={styles.lateralMenuText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Notifications")}
        >
          <View style={styles.lateralMenuIconContainer}>
            <Ionicons name="calendar-outline" size={26} color="black" />
            <Badge containerStyle={styles.badge} value="42" status="error" />
          </View>
          <Text style={styles.lateralMenuText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.lateralMenuIconContainer}>
            <Ionicons name="settings-outline" size={26} color="black" />
            <Badge containerStyle={styles.badge} value="3" status="error" />
          </View>
          <Text style={styles.lateralMenuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.lateralMenuIconContainer}>
            <Ionicons name="person-circle-outline" size={26} color="black" />
            <Badge containerStyle={styles.badge} value="1" status="error" />
          </View>
          <Text style={styles.lateralMenuText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  menuBtn: {
    marginVertical: 10,
    alignItems: "center",
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  lateralMenuText: {
    marginLeft: 15,
  },
  lateralMenuIconContainer: {
    padding: 10,
  },
  badge: {
    position: "absolute",
    top: 5,
    left: 5,
  },
});

export default LateralMenu;
