import React, { useEffect, useMemo } from "react";
import CardsProps from "../../../../components/UI/ParkingCard";
import cardData from "../../../../cards";
import { ScrollView, Image, Pressable } from "react-native";
import CustomText from "../../../../components/UI/CustomText";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../../components/UI/Input";
import {
  LocateIcon,
  Search,
  TagBg,
} from "../../../../components/UI/Icons/Icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native-paper";
import ParkingCard from "../../../../components/UI/ParkingCard";
import { Query } from "react-native-appwrite/src";
import { databases } from "../../../../appwrite/config";

export default function Explore() {
  const [isLoading, setIsLoading] = useState(true);
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
  const params = useLocalSearchParams<{ searchText: string }>();
  const [searchText, setSearchText] = useState(params.searchText || "");
  const [isEmpty, setIsEmpty] = useState(false);

  // useEffect(() => {
  //   if (params.searchText) {
  //     setSearchText();
  //   }
  //   // console.log("Ran right here");
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    setIsEmpty(false);

    const loadParkings = async () => {
      if (searchText !== "") {
        const { documents } = await databases.listDocuments(
          "6627e9abef0db39e0ebf",
          "6627e9cd3cc6db2ea8e3",
          [
            Query.limit(6),
            Query.select([
              "name",
              "avenue",
              "description",
              "image_url",
              "$id",
              "price",
            ]),
            Query.startsWith("name", searchText),
            Query.startsWith("avenue", searchText),
            Query.startsWith("description", searchText),
          ]
        );

        if (documents.length === 0) {
          setIsEmpty(true);
        }

        setParkings([]);
        setParkings(documents);
        setIsLoading(false);
      } else {
        const { documents } = await databases.listDocuments(
          "6627e9abef0db39e0ebf",
          "6627e9cd3cc6db2ea8e3",
          [
            Query.limit(6),
            Query.select([
              "name",
              "avenue",
              "description",
              "image_url",
              "$id",
              "price",
            ]),
          ]
        );

        if (documents.length === 0) {
          setIsEmpty(true);
        }

        setParkings([]);
        setParkings(documents);
        setIsLoading(false);
      }
    };

    loadParkings();
  }, [searchText]);

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
            onChangeText={(e) => {
              setSearchText(e);
            }}
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

        {isEmpty ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              height: 100,
            }}
          >
            <CustomText>Can't find anything</CustomText>
          </View>
        ) : (
          <View style={{ gap: 15 }}>
            {isLoading ? (
              <ActivityIndicator color="black" size="large" />
            ) : (
              parkings.map((parking) => {
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
                      router.push({
                        pathname: "/Parking/[ParkingDetails]",
                        params: { id: parking.id },
                      });
                    }}
                  />
                );
              })
            )}
          </View>
        )}
      </ScrollView>
      <Pressable
        onPress={() => {
          router.push(" /Parking/History");
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
