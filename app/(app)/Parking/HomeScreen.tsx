import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import ParkingCard from "../../../components/UI/ParkingCard";
import cardData from "../../../cards";
import Header from "../../../components/UI/Header";
import CustomText from "../../../components/UI/CustomText";
import Input from "../../../components/UI/Input";
import { Search } from "../../../components/UI/Icons/Icons";
import { Link, router } from "expo-router";
import { UserContext } from "../../../store/user/UserContext";
import { databases } from "../../../appwrite/config";
import { Query } from "react-native-appwrite/src";
import { ActivityIndicator } from "react-native-paper";

export default function HomeScreen() {
  const { name } = useContext(UserContext);
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

      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   loadParkings();
  // }, []);

  console.log(parkings);

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
              <Link href="/Options/Profile">
                <CustomText size={4} style={styles.greetings}>
                  Hola, {String(name).split(" ")[0]} 👋🏻
                </CustomText>
              </Link>
              <CustomText style={styles.description}>
                Find an easy parking spot
              </CustomText>
            </View>

            <Pressable
              onPress={() => {
                router.push("/Options/Notifications");
              }}
              style={styles.notificationIcon}
            >
              <Image
                source={require("../../../assets/images/Notification.png")}
              />
            </Pressable>
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
          <Pressable
            onPress={() => {
              router.push("/Parking/Explore/Explore");
            }}
            style={styles.card}
          >
            <Image
              source={require("../../../assets/images/car_menu_icon.png")}
            />
            <CustomText>Car</CustomText>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.card}>
            <Image source={require("../../../assets/images/bike.png")} />
            <CustomText>Bike</CustomText>
          </Pressable>
          <View style={styles.card}>
            <Image source={require("../../../assets/images/bus.png")} />
            <CustomText>Bus</CustomText>
          </View>
          <View style={styles.card}>
            <Image source={require("../../../assets/images/van.png")} />
            <CustomText>Van</CustomText>
          </View>
        </View>
      </View>

      <View style={{ padding: 20, gap: 20, flex: 1 }}>
        <CustomText size={3}>Nearest Parking Spaces</CustomText>
        {isLoading ? (
          <View style={{ height: 200, width: "100%" }}>
            <ActivityIndicator color="black" size="large" />
          </View>
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
