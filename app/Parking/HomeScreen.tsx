import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import ParkingCard from "../../components/UI/ParkingCard";
import cardData from "../../components/cards"; // Assuming the array is exported as 'cardData'
import Header from "../../components/UI/Header";
import CustomText from "../../components/UI/CustomText";
import Input from "../../components/UI/Input";
import { Search } from "../../components/UI/Icons/Icons";

export default function HomeScreen() {
  const [cards, setCards] = useState(cardData);

  return (
    <ScrollView style={{ backgroundColor: "#F4F4FA", flex: 1 }}>
      <Header backgroundColor="#081024">
        <View style={{ gap: 40 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <CustomText size={4} style={styles.greetings}>
                Hola, Diane 👋🏻
              </CustomText>
              <CustomText style={styles.description}>
                Find an easy parking spot
              </CustomText>
            </View>

            <View style={styles.notificationIcon}>
              <Image source={require("../../assets/images/Notification.png")} />
            </View>
          </View>
          <Input
            placeholderTextColor="#B2B6BF"
            backgroundColor="#2A344E"
            placeholder="Search"
            btnLeft={<Search />}
          />
        </View>
      </Header>

      <View style={{ padding: 20, gap: 20, flex: 1 }}>
        <CustomText size={3}>Categories</CustomText>

        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image source={require("../../assets/images/car.png")} />
            <CustomText>Car</CustomText>
          </View>
          <View style={styles.card}>
            <Image source={require("../../assets/images/bike.png")} />
            <CustomText>Bike</CustomText>
          </View>
          <View style={styles.card}>
            <Image source={require("../../assets/images/bus.png")} />
            <CustomText>Bus</CustomText>
          </View>
          <View style={styles.card}>
            <Image source={require("../../assets/images/van.png")} />
            <CustomText>Van</CustomText>
          </View>
        </View>
      </View>

      <View style={{ padding: 20, gap: 20, flex: 1 }}>
        <CustomText size={3}>Nearest Parking Spaces</CustomText>
        {cards.map((card) => (
          <ParkingCard
            key={card.id}
            children={<Image source={card.image} />}
            head={card.title}
            hello={card.greating}
            hr={card.hr}
            dollar={card.money}
            time={card.time}
          />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  description: {
    color: "#757985",
  },
  card: {
    backgroundColor: "#FFFF",
    paddingHorizontal: 22,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    gap: 5,
  },
  notificationIcon: {
    backgroundColor: "#2A344E",
    padding: 10,
    borderRadius: 9,
  },
  greetings: {
    color: "#FFFF",
  },
});
