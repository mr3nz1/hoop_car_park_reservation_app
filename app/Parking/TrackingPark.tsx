import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "../../components/UI/CustomText";
import TagWrapper from "../../components/UI/TagWrapper";
import {
  Attention,
  DottedLine,
  Location,
  LocationAndLine,
  Time,
} from "../../components/UI/Icons/Icons";
import Column from "../../components/UI/Column";
import Button from "../../components/UI/Button";
import { useEffect, useRef, useState } from "react";
import { Link } from "expo-router";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export default function TrackingPark() {
  const [showInfoBox, setShowInfoBox] = useState(false);

  const position = useSharedValue(100);
  const opacity = useSharedValue(0);
  const display = useSharedValue("none");

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: position.value }],
    opacity: opacity.value,
    display: display.value,
  }));

  const flingGestureUp = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {
      position.value = withTiming(position.value - 100, { duration: 200 });
      opacity.value = withTiming(opacity.value + 1, { duration: 50 });
      display.value = withTiming("flex", { duration: 10 });
    });

  const flingGestureDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      position.value = withTiming(position.value + 100, { duration: 200 });
      opacity.value = withTiming(opacity.value - 1, { duration: 50 });
      display.value = withTiming("none", { duration: 10 });
      display.modify(() => {
        return "none";
      });
    });

  // const combinedGestures = Gesture.Simultaneous(
  //   flingGestureUp,
  //   flingGestureDown
  // );

  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <View style={styles.container}>
          <Image source={require("../../assets/images/maps.png")} />

          <GestureDetector gesture={flingGestureUp}>
            <GestureDetector gesture={flingGestureDown}>
              <View style={styles.boxContainer}>
                <Column gap={15} style={styles.box}>
                  <Pressable
                    style={{
                      width: 30,
                      height: 4,
                      backgroundColor: "#C8C8C8",
                      alignSelf: "center",
                    }}
                    onPress={() => {
                      setShowInfoBox((prevVal) => !prevVal);
                    }}
                  ></Pressable>
                  <Animated.View
                    style={[
                      animatedStyle,
                      {
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      },
                    ]}
                  >
                    <View style={{ gap: 4 }}>
                      <CustomText size={0.5} style={{ color: "#C8C8C8" }}>
                        Your Destination Address
                      </CustomText>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 8,
                          alignItems: "flex-start",
                        }}
                      >
                        <View style={{ paddingTop: 4 }}>
                          <LocationAndLine />
                        </View>
                        <CustomText size={1} fontWeight="bold">
                          123 Dhaka Street
                        </CustomText>
                      </View>
                      <View style={{ gap: 4 }}>
                        <CustomText size={0.5} style={{ color: "#C8C8C8" }}>
                          Your Address
                        </CustomText>

                        <View
                          style={{
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "flex-start",
                          }}
                        >
                          <View style={{ paddingTop: 4 }}>
                            <Location />
                          </View>
                          <CustomText size={1} fontWeight="bold">
                            123 Dhaka Street
                          </CustomText>
                        </View>
                      </View>
                    </View>
                    <TagWrapper>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Time />
                        <CustomText size={0.5}>7 minutes</CustomText>
                      </View>
                    </TagWrapper>
                  </Animated.View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#F4F4FA",
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      borderRadius: 20,
                      gap: 20,
                    }}
                  >
                    <Pressable
                      style={{
                        padding: 10,
                        backgroundColor: "white",
                        borderRadius: 50,
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Info Circle (1).png")}
                      />
                    </Pressable>
                    <Button
                      backgroundColor="#130F26"
                      onPress={() => {}}
                      style={{ flex: 1 }}
                    >
                      <Link href="/Parking/ChooseSpace">
                        <CustomText style={{ color: "white" }}>
                          Start Now
                        </CustomText>
                      </Link>
                    </Button>
                  </View>
                </Column>
              </View>
            </GestureDetector>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    height: "100%",
  },
  boxContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});
