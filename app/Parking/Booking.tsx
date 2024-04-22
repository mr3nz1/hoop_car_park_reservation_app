import { Image, Pressable, View, ScrollView, Easing } from "react-native";
import CustomText from "../../components/UI/CustomText";
import { StyleSheet } from "react-native";
import Column from "../../components/UI/Column";
import { WheelTrianglePointer } from "../../components/UI/Icons/Icons";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Button from "../../components/UI/Button";
import { router } from "expo-router";
import Wheel from "../../components/Booking/Wheel";
import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useValueEffect } from "@shopify/react-native-skia";

export default function Booking() {
  const rotation = useSharedValue(0);
  const [selectedHours, setSelectedHours] = useState(1);
  const up = useSharedValue(1);
  const down = useSharedValue(1);
  let x = 0;

  const flingDownGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      rotation.value = withTiming(rotation.value - 60, { duration: 200 });
      down.value = withTiming(down.value + 1, { duration: 0 });
    });
  // .onEnd(() => {
  // });

  const flingUpGesture = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {
      rotation.value = withTiming(rotation.value + 60, { duration: 200 });
      up.value = withTiming(up.value + 1, { duration: 0 });
      x = 2;
    });
  // .onEnd(() => {
  //   setSelectedHours(20);
  // });

  useEffect(() => {
    console.log();
  }, [down, up, rotation, flingDownGesture, flingUpGesture]);

  const positionAnimationstyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    console.log("Flinged");
  }, [selectedHours]);

  const hours = [
    { title: "1", label: "Hour" },
    { title: "2", label: "Hours" },
    { title: "3", label: "Hours" },
    { title: "4", label: "Hours" },
    { title: "5", label: "Hours" },
    { title: "6", label: "Hours" },
    { title: "7", label: "Hours" },
    { title: "8", label: "Hours" },
    { title: "9", label: "Hours" },
    { title: "10", label: "Hours" },
  ];

  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Column
              gap={30}
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <Column gap={0}>
                <CustomText size={5}>Add</CustomText>
                <CustomText size={5}>Insurance?</CustomText>
              </Column>
              <ScrollView
                nestedScrollEnabled={true}
                scrollEnabled={true}
                contentContainerStyle={styles.addInsuranceScrollView}
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 20,
                  height: 300,
                }}
                showsVerticalScrollIndicator={false}
              >
                <Pressable style={styles.addInsuranceItemScrollView}>
                  <Image source={require("../../assets/images/petrol.png")} />
                </Pressable>
                <Pressable style={styles.addInsuranceItemScrollView}>
                  <Image
                    source={require("../../assets/images/car_other.png")}
                  />
                </Pressable>
                <Pressable style={styles.addInsuranceItemScrollView}>
                  <Image
                    source={require("../../assets/images/screw_driver.png")}
                  />
                </Pressable>
                <Pressable style={styles.addInsuranceItemScrollView}>
                  <Image source={require("../../assets/images/petrol.png")} />
                </Pressable>
                <Pressable style={styles.addInsuranceItemScrollView}>
                  <Image source={require("../../assets/images/petrol.png")} />
                </Pressable>
              </ScrollView>
            </Column>

            <GestureDetector gesture={flingUpGesture}>
              <GestureDetector gesture={flingDownGesture}>
                <Animated.View
                  style={[
                    {
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 500,
                      position: "absolute",
                      right: "-65%",
                      top: "15%",
                      transform: [{ rotate: `${rotation.value}deg` }],
                    },
                    positionAnimationstyle,
                  ]}
                >
                  <Wheel currentValue={selectedHours} />
                </Animated.View>
              </GestureDetector>
            </GestureDetector>
            <View style={{ position: "absolute", right: 45, top: "60%" }}>
              <WheelTrianglePointer />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "auto",
            }}
          >
            <CustomText fontWeight="bold" size={3} style={{ flexGrow: 1 }}>
              $35,00
            </CustomText>
            <Button
              onPress={() => {
                router.push("/Parking/BookDetails");
              }}
              backgroundColor="#130F26"
              style={{ flexGrow: 1 }}
            >
              <CustomText style={{ color: "white" }}>Book Now</CustomText>
            </Button>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: "#F4F4F4",
    height: "100%",
  },
  addInsuranceScrollView: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    // maxHeight: 400,
    paddingBottom: 20,
  },
  addInsuranceItemScrollView: {
    padding: 20,
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
  },
  wheelContainer: {
    backgroundColor: "white",
    height: 500,
    width: 500,
    position: "absolute",
    right: -350,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  },
});
