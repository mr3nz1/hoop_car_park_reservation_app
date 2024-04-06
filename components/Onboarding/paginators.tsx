import React from "react";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

export default function Paginator({ data, scrollX }:any) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_:any, i:any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#aaa", "#F43939", "#aaa"],
          extrapolate: "clamp",
        });

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { backgroundColor: dotColor, width: dotWidth }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    height: 64,
    backgroundColor: "#EAEAF3",
 
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
