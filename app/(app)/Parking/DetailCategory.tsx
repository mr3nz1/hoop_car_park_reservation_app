import React, { useMemo } from "react";
import CardsProps from "../../../components/UI/ParkingCard";
import cardData from "../../../cards";
import { ScrollView, Image, Pressable } from "react-native";
import CustomText from "../../../components/UI/CustomText";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/UI/Input";
import { LocateIcon, Search, TagBg } from "../../../components/UI/Icons/Icons";
import { StatusBar } from "expo-status-bar";
import { databases } from "../../../appwrite/config";
import { Query } from "react-native-appwrite/src";
import { ActivityIndicator } from "react-native-paper";
import ParkingCard from "../../../components/UI/ParkingCard";
import { router } from "expo-router";

export default function DetailCategory() {
  const [cards, setCards] = useState(cardData);
  const [parkings, setParkings] = useState<
    | {
        id: string;
        price: string;
        timeAway: string;
        name: string;
        avenue: string;
        imageUrl: string;
      }[]
    | any[]
  >([]);

  const loadParkings = useMemo(async () => {
    const { documents } = await databases.listDocuments(
      "6627e9abef0db39e0ebf",
      "6627e9cd3cc6db2ea8e3",
      [Query.limit(6)]
    );
    documents.forEach((current) => {
      setParkings((prevValue) => {
        return [
          ...prevValue,
          {
            id: current.$id,
            price: current.price,
            avenue: current.avenue,
            imageUrl: current.image_url,
            name: current.name,
          },
        ];
      });
    });
  }, []);
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
          {parkings.length === 0 ? (
            <ActivityIndicator color="black" size="large" />
          ) : (
            parkings.map((parking) => {
              console.log(parking);
              return (
                <ParkingCard
                  key={parking.id}
                  children={
                    <Image
                      source={{
                        uri: parking.imageUrl,
                      }}
                      height={120}
                      width={100}
                      style={{ borderRadius: 20 }}
                    />
                  }
                  name={parking.name}
                  avenue={parking.avenue}
                  timeAway={"10 min"}
                  price={parking.price}
                  onPress={() => {
                    router.push("/Parking/ParkingDetails");
                  }}
                />
              );
            })
          )}
          {parkings.length === 0 ? (
            <ActivityIndicator color="black" size="large" />
          ) : (
            parkings.map((parking) => {
              console.log(parking);
              return (
                <ParkingCard
                  key={parking.id}
                  children={
                    <Image
                      source={{
                        uri: parking.imageUrl,
                      }}
                      height={120}
                      width={100}
                      style={{ borderRadius: 20 }}
                    />
                  }
                  name={parking.name}
                  avenue={parking.avenue}
                  timeAway={"10 min"}
                  price={parking.price}
                  onPress={() => {
                    router.push("/Parking/ParkingDetails");
                  }}
                />
              );
            })
          )}
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
