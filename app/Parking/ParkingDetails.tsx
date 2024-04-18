import { Image, ScrollView, StyleSheet, View } from "react-native";
import ParkingImageShowcase from "../../components/UI/ParkingImageShowcase";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import TagWrapper from "../../components/UI/TagWrapper";
import Button from "../../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import ParkingDetails from "../../components/UI/ParkingDetails";
import { StatusBar } from "expo-status-bar";

export default function ParkingDetail() {
  return (
    <>
    <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <Column gap={40}>
          <ParkingImageShowcase showLocationBtn={true} />

          <ParkingDetails
            name="Graha Mall"
            location="123 Dhaka Street"
            distanceAway="500 m away"
            timeAway="7 mins"
          />

          <Column gap={2} style={{ paddingHorizontal: 30, paddingBottom: 100 }}>
            <CustomText size={2}>Information</CustomText>
            <CustomText size={1.5} style={styles.gray}>
              24/7 parking facility with cctv camera, professional security
              guard, chair disble, floor parking list facilities. You will get
              hassle parking facilities with 35% discount on first parking...
            </CustomText>
          </Column>
        </Column>
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
