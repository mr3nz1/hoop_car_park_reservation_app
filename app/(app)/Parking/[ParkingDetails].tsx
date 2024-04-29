import { Image, ScrollView, StyleSheet, View } from "react-native";
import ParkingImageShowcase from "../../../components/UI/ParkingImageShowcase";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Column from "../../../components/UI/Column";
import CustomText from "../../../components/UI/CustomText";
import TagWrapper from "../../../components/UI/TagWrapper";
import Button from "../../../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import ParkingDetails from "../../../components/UI/ParkingDetails";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { databases } from "../../../appwrite/config";
import { Query } from "react-native-appwrite/src";
import { ActivityIndicator } from "react-native-paper";

export default function ParkingDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(true);

  const [parking, setParking] = useState<
    | {
        id: string;
        price: string;
        timeAway: string;
        name: string;
        avenue: string;
        imageUrl: string;
        description: string;
      }
    | any
  >({});

  const loadParking = useMemo(async () => {
    const { documents } = await databases.listDocuments(
      "6627e9abef0db39e0ebf",
      "6627e9cd3cc6db2ea8e3",
      [Query.equal("$id", [id!])]
    );

    setParking({
      id: documents[0].$id,
      price: documents[0].price,
      avenue: documents[0].avenue,
      imageUrl: documents[0].image_url,
      name: documents[0].name,
      description: documents[0].description,
    });

    setIsLoading(false);
  }, []);

  console.log(parking);

  return (
    <>
      <StatusBar style="dark" translucent={true} />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Column gap={40}>
            <ParkingImageShowcase
              imageUrl={parking.imageUrl}
              showLocationBtn={true}
            />

            <ParkingDetails
              name={parking.name}
              location={parking.avenue}
              distanceAway={"500 m away"}
              timeAway="7 mins"
            />

            <Column
              gap={2}
              style={{ paddingHorizontal: 30, paddingBottom: 100 }}
            >
              <CustomText size={2}>Information</CustomText>
              <CustomText size={1.5} style={styles.gray}>
                {parking.description}
              </CustomText>
            </Column>
          </Column>
        )}
      </ScrollView>

      <LinearGradient
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 30,
          paddingBottom: 20,
          position: "absolute",
          bottom: 0,
        }}
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
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
