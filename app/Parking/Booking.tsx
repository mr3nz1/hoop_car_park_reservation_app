import { Image, Pressable, View, ScrollView } from "react-native";
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

export default function Booking() {
  const rotation = useSharedValue(50);
  const xPosition = useSharedValue(110);
  const yPosition = useSharedValue(-50);

  const flingDownGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      rotation.value = withTiming(0, { duration: 200 });
      xPosition.value = withTiming(35, { duration: 200 });
      yPosition.value = withTiming(210, { duration: 200 });
    });

  const positionAnimationstyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotation.value}deg` },
      { translateX: xPosition.value },
      { translateY: yPosition.value },
    ],
  }));

  return (
    <>
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

            <GestureDetector gesture={flingDownGesture}>
              <View style={styles.wheelContainer}>
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "100%",
                    height: "100%",
                    borderRadius: 500,
                  }}
                >
                  <Animated.View
                    style={[
                      {
                        alignItems: "center",
                        gap: 0,
                        // transform: [
                        //   { rotate: "50deg" },
                        //   { translateX: 110 },
                        //   { translateY: -120 },
                        // ],
                        transformOrigin: "center",
                      },
                      positionAnimationstyle,
                    ]}
                  >
                    <CustomText
                      size={4}
                      fontWeight="bold"
                      style={{ color: "#ABABAB" }}
                    >
                      3
                    </CustomText>
                    <CustomText size={2} style={{ color: "#ABABAB" }}>
                      Hours
                    </CustomText>
                  </Animated.View>

                  <View
                    style={{
                      alignItems: "center",

                      gap: 0,
                      transform: [
                        // { rotate: "50deg" },
                        { translateX: 25 },
                        { translateY: 120 },
                      ],
                    }}
                  >
                    <CustomText size={4} fontWeight="bold" style={{}}>
                      4
                    </CustomText>
                    <CustomText size={2} style={{}}>
                      Hours
                    </CustomText>
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                      transform: [
                        { rotate: "135deg" },
                        { translateX: 70 },
                        { translateY: -200 },
                      ],
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        transform: [{ rotate: "-180deg" }],
                      }}
                    >
                      <CustomText
                        size={4}
                        fontWeight="bold"
                        style={{ color: "#ABABAB" }}
                      >
                        5
                      </CustomText>
                      <CustomText size={2} style={{ color: "#ABABAB" }}>
                        Hours
                      </CustomText>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#F4F4F4",
                    height: 250,
                    width: 250,
                    borderRadius: 200,
                    position: "absolute",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <View
                      style={{ position: "absolute", top: "39%", left: -15 }}
                    >
                      <WheelTrianglePointer />
                    </View>
                  </View>
                </View>
              </View>
            </GestureDetector>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "auto"
            }}
          >
            <CustomText fontWeight="bold" size={3} style={{ flexGrow: 1 }}>
              $35,00
            </CustomText>
            <Button
              onPress={() => {
                router.push("/Parking/BookDetails")
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
    height: "100%"
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
