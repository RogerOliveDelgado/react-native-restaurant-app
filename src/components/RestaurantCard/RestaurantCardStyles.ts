import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: "row",
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    buttonsFlex: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center'
    },
    titleContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      borderColor: 'blue',
      borderWidth: 1
    },
    titleText: {
    },
    titleIcon: {
      borderColor: 'purple',
      borderWidth: 1,
    },
  });