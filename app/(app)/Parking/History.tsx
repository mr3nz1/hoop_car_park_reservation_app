import React from "react";
import CardsProps from "../../../components/UI/ParkingCard";
import cardData from "../../../cards";
import { ScrollView, Image, Pressable } from "react-native";
import CustomText from "../../../components/UI/CustomText";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/UI/Input";
import {
  Filter,
  LocateIcon,
  Search,
  TagBg,
} from "../../../components/UI/Icons/Icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function History() {
  const [cards, setCards] = useState(cardData);
  return (
    <>
    <StatusBar style="dark" />
      <ScrollView contentContainerStyle={[styles.container]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Search"
              btnLeft={<Search color="#929298" />}
              backgroundColor="#EAEAF3"
              textInputStyle={{ color: "#929298" }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: "#EAEAF3",
              padding: 20,
              borderRadius: 20,
            }}
            onPress={() => {
              router.push("/Parking/ShowMaps");
            }}
          >
            <Filter />
          </Pressable>
        </View>

        <View style={{ gap: 15 }}>
          <CustomText size={2}>Recently</CustomText>
          <View style={{ gap: 15 }}>
            {cards.map((card) => (
              <Pressable
                onPress={() => {
                  router.push("/Parking/DetailHistory");
                }}
              >
                <CardsProps
                  key={card.id}
                  children={<Image source={card.image} />}
                  head={card.title}
                  hello={card.greating}
                  hr={card.hr}
                  dollar={card.money}
                  time={card.time}
                  onprogress={() => {
                    router.push("/Parking/DetailHistory");
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>

        <View style={{ gap: 15 }}>
          <CustomText size={2}>This Week</CustomText>
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
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => {}}
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
