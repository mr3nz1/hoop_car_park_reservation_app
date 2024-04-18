import { Image, Pressable, View, ScrollView, Easing } from "react-native";
import CustomText from "../../components/UI/CustomText";
import { StyleSheet } from "react-native";
import Column from "../../components/UI/Column";
import { WheelTrianglePointer } from "../../components/UI/Icons/Icons";
import Animated, {
  useAnimatedStyle,
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
import { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";

export default function Booking() {
  const rotation = useSharedValue(0);

  const flingDownGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      rotation.value = withTiming(rotation.value - 60, { duration: 200 });
    });

  const flingUpGesture = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {
      rotation.value = withTiming(rotation.value + 60, { duration: 200 });
    });

  const positionAnimationstyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const hours: {
    id: number;
    hours: number;
  }[] = [
    { id: 1, hours: 1 },
    { id: 2, hours: 2 },
    { id: 3, hours: 3 },
    { id: 4, hours: 4 },
    { id: 5, hours: 5 },
    { id: 6, hours: 6 },
    { id: 7, hours: 7 },
    { id: 8, hours: 8 },
    { id: 9, hours: 9 },
    { id: 10, hours: 10 },
  ];

  // const rotateAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(rotateAnim, {
  //       toValue: 1,
  //       duration: 10000,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // }, [rotateAnim]);

  // const spin = rotateAnim.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });
  return (
    <>
      <StatusBar style="dark" />
      {/* <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Wheel />
      </View> */}
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
                    },
                    positionAnimationstyle,
                  ]}
                >
                  <Wheel />
                </Animated.View>
              </GestureDetector>
            </GestureDetector>
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
