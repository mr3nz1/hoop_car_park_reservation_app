import React from "react";
import CardsProps from "../../../components/UI/ParkingCard";
import cardData from "../../../cards";
import { ScrollView, Image, Pressable } from "react-native";
import CustomText from "../../../components/UI/CustomText";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/UI/Input";
import { LocateIcon, Search, TagBg } from "../../../components/UI/Icons/Icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Explore() {
  const [cards, setCards] = useState(cardData);
  return (
    <>
    <StatusBar style="dark" />
      <ScrollView contentContainerStyle={[styles.container]}>
        <View>
          <Input
            placeholder="Search"
            btnLeft={<Search color="#929298" />}
            backgroundColor="#EAEAF3"
            textInputStyle={{ color: "#929298" }}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TagBg>
            <CustomText
              size={1.5}
              style={{ color: "white", width: "100%", textAlign: "center" }}
            >
              Nearest
            </CustomText>
          </TagBg>
          <CustomText style={{ color: "#929298" }} size={1.5}>
            Most Popular
          </CustomText>
          <CustomText style={{ color: "#929298" }} size={1.5}>
            Most Wanted
          </CustomText>
        </View>

        <View style={{ gap: 15 }}>
          {cards.map((card) => (
            <CardsProps
              key={card.id}
              children={<Image source={card.image} />}
              head={card.title}
              hello={card.greating}
              hr={card.hr}
              dollar={card.money}
              time={card.time}
            />
          ))}
          {cards.map((card) => (
            <CardsProps
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
      <Pressable
        onPress={() => {
          router.push(" /Parking/History")
        }}
        style={{ position: "absolute", bottom: 0, right: 0, margin: 20 }}
      >
        <LocateIcon />
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    gap: 40,
    padding: 20,
    position: "relative",
  },
});
