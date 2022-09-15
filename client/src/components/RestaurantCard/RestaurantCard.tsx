import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Text, Card, Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Restaurant } from "../../interfaces/RestaurantEntity";
import { styles } from "./RestaurantCardStyles";
import { useAppDispatch } from "../../store/hooks";
import { favouriteCartActions } from "../../store/slices/favouriteCart-slice";
import { alertsActions } from '../../store/slices/alerts-slice';

type CardsComponentsProps = {};

const isFavourite = true;

const RestaurantCard = (
  restaurant: Restaurant
) => {
  const { id, rating, name, type, tables_available, location } = restaurant;
  const dispatch = useAppDispatch();
  const addToFavourites = () => {
    //need to redefine dispatch type
    dispatch(favouriteCartActions.addToCart(restaurant));
  };

  const handleReservation = () => {
    dispatch(alertsActions.updateAlert("bookings"))
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title style={styles.title}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{name}</Text>
                <Ionicons
                  style={styles.titleIcon}
                  name="trash"
                  color="black"
                  size={26}
                />
              </View>
            </Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <View style={styles.buttonsFlex}>
              <Button
                onPress={addToFavourites}
                icon={<Ionicons name="heart" color="black" size={26} />}
                buttonStyle={{
                  backgroundColor: isFavourite ? "#eb1313cb" : "transparent",
                  borderRadius: 50,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  width: 50,
                }}
                title=""
              />
              <Button
                onPress={handleReservation}
                icon={<Ionicons name="cart" color="black" size={26} />}
                buttonStyle={{
                  backgroundColor: isFavourite ? "#17eb13ca" : "transparent",
                  borderRadius: 50,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  width: 50,
                }}
                title=""
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantCard;
