import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
// import avatar from './../assets/avatar.png'

function Home() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 20,
    margin: 20,
    borderWidth: 5,
  },
  imageContainer: {
    borderRadius: 20,
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    width: 150,
    height: 150,
    borderColor: "black",
    borderRadius: 50,
    borderWidth: 5,
  },
});

export default Home;
