import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ParkingImageShowcase from "../../../components/UI/ParkingImageShowcase";
import ParkingDetails from "../../../components/UI/ParkingDetails";
import CustomText from "../../../components/UI/CustomText";
import Button from "../../../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { databases } from "../../../appwrite/config";
import { StatusBar } from "expo-status-bar";

export default function DetailHistory() {
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

  useEffect(() => {
    const loadParkings = async () => {
      try {
        const documentIds = ["documentId1", "documentId2", "documentId3"];
        const loadedParkings = await Promise.all(
          documentIds.map(async id => {
            const { document } = await databases.getDocument(
              "6627e9abef0db39e0ebf",
              "6627e9cd3cc6db2ea8e3",
              id
            );
            return {
              id: document.$id,
              price: document.price,
              avenue: document.avenue,
              imageUrl: document.image_url,
              name: document.name
            };
          })
        );
        setParkings(loadedParkings);
      } catch (error) {
        console.error("Error loading parkings:", error);
      }
    };

    loadParkings();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <ParkingImageShowcase showLocationBtn={true} />
        {parkings.map(parking => (
          <ParkingDetails
            key={parking.id}
            name={parking.name}
            location={parking.avenue}
            distanceAway="500 m away"
            timeAway="7 mins" 
          />
        ))}
        <CustomText size={2} style={[styles.textCenter, styles.gray]}>
          Information
        </CustomText>
        <CustomText size={1.5} style={[styles.textCenter, styles.gray]}>
          24/7 parking facility with CCTV camera, professional security guard,
          chair disable, floor parking list facilities. You will get hassle
          parking facilities with 35% discount on first parking...
        </CustomText>
      </ScrollView>
      <LinearGradient
        style={styles.buttonContainer}
        colors={["transparent", "#F4F4FA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Button onPress={() => {}} backgroundColor="#130F26">
          <CustomText style={{ color: "white", paddingHorizontal: 20 }}>
            <Link href="/Parking/TrackingPark">Book Now</Link>
          </CustomText>
        </Button>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    paddingTop: 20,
  },
  gray: { color: "#919193" },
  textCenter: {
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
  },
});
