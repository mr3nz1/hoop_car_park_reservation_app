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
import { Animated } from "react-native";

export default function TrackingPark() {
  const [showInfoBox, setShowInfoBox] = useState(false);
  const slideUp = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.spring(slideUp, { toValue: 0, useNativeDriver: true }).start();

    console.log(slideUp, typeof slideUp);
  }, []);

  const fling = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {});
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Image source={require("../../assets/images/maps.png")} />

        <View style={styles.boxContainer}>
          <Column gap={15} style={styles.box}>
            <GestureDetector gesture={fling}>
              <Pressable
                style={{
                  width: 30,
                  height: 10,
                  backgroundColor: "#C8C8C8",
                  alignSelf: "center",
                }}
                onPress={() => {
                  setShowInfoBox((prevVal) => !prevVal);
                }}
              ></Pressable>
            </GestureDetector>
            <Animated.View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                // display: showInfoBox ? "flex" : "none",
                transform: [
                  {
                    translateY: slideUp,
                  },
                ],
              }}
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
                  <CustomText style={{ color: "white" }}>Start Now</CustomText>
                </Link>
              </Button>
            </View>
          </Column>
        </View>
      </View>
    </GestureHandlerRootView>
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
