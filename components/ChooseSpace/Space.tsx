import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Space() {
  const translation = useSharedValue({ x: 0, y: 0 });
  const design = useSharedValue(false);

  const pan = Gesture.Pan()
    .onChange((e) => {
      translation.value = withTiming(
        { x: e.translationX, y: e.translationY },
        { duration: 0 }
      );
    })
    .onFinalize((e) => {
      translation.value = withTiming(
        { x: e.translationX, y: e.translationY },
        { duration: 0 }
      );
    });

  console.log(translation.value);

  const animatedStyle = useAnimatedStyle(() => ({
    top: translation.value.y,
    left: translation.value.x,
  }));

  const containerStyle = useAnimatedStyle(() => ({}))

  return (
    <GestureHandlerRootView>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{ backgroundColor: "#A4A4A8", height: 1, width: 300 }}
        ></View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 60,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GestureDetector gesture={pan}>
              <Animated.View
                style={[
                  {
                    position: "absolute",
                    zIndex: 1,
                    padding: 12,
                    backgroundColor: "#F43939",
                    borderRadius: 20,
                  },
                  animatedStyle,
                ]}
              >
                {/* <Animated.Image
                  source={require("../../assets/images/car.png")}
                  style={[{ position: "absolute", zIndex: 1 }, animatedStyle]}
                /> */}
                <Animated.Image
                  style={{
                    zIndex: 1,
                  }}
                  source={require("../../assets/images/car.png")}
                />
              </Animated.View>
            </GestureDetector>
          </View>
          <View
            style={{ backgroundColor: "#A4A4A8", height: 60, width: 2 }}
          ></View>
          <View style={{ height: 60, width: 150 }}></View>
        </View>

        <View
          style={{ backgroundColor: "#A4A4A8", height: 1, width: 300 }}
        ></View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ height: 60, width: 150 }}></View>
          <View
            style={{ backgroundColor: "#A4A4A8", height: 60, width: 2 }}
          ></View>
          <View style={{ height: 60, width: 150 }}></View>
        </View>

        <View
          style={{ backgroundColor: "#A4A4A8", height: 1, width: 300 }}
        ></View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ height: 60, width: 150 }}></View>
          <View
            style={{ backgroundColor: "#A4A4A8", height: 60, width: 2 }}
          ></View>
          <View style={{ height: 60, width: 150 }}></View>
        </View>

        <View
          style={{ backgroundColor: "#A4A4A8", height: 1, width: 300 }}
        ></View>
      </View>
    </GestureHandlerRootView>
  );
}
