import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../components/UI/CustomText";
import { TurnLeft } from "../../components/UI/Icons/Icons";
import { StatusBar } from "expo-status-bar";

export default function ParkingRoute() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={{}}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/parking_route.png")}
        />

        <View style={styles.cardContainer}>
          <View>
            <CustomText size={3} style={styles.cardTitle}>
              Route
            </CustomText>
            <CustomText style={styles.description}>
              Turn left to parking spot
            </CustomText>
          </View>

          <View style={styles.verticalLine}></View>

          <View style={styles.cardLastCol}>
            <TurnLeft />
            <CustomText>100 m</CustomText>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "absolute",
    top: 1,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  verticalLine: {
    height: 50,
    width: 1,
    backgroundColor: "#E0E0E5",
  },
  cardTitle: {},
  description: {
    color: "#919193",
  },
  cardLastCol: {
    gap: 4,
  },
});
