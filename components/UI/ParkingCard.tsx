import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";
import TagWrapper from "./TagWrapper";

interface ParkingCardProps {
  head: string;
  hello: string;
  dollar?: string;
  hr: string;
  time: string;
}

export default function ParkingCard(
  props: React.PropsWithChildren<ParkingCardProps>
) {
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View>{props.children}</View>

      <View style={styles.textContainer}>
        <View style={{ gap: 20 }}>
          <View>
            <CustomText size={2}>{props.head}</CustomText>
            <CustomText style={{ color: "#2D2D2D80" }}>
              {props.hello}
            </CustomText>
          </View>
          <View>
            <CustomText style={{ color: "#F43939" }}>
              <CustomText size={2}>{`${props.dollar}`}</CustomText>
              <CustomText size={0.5}>{props.hr}</CustomText>
            </CustomText>
          </View>
        </View>
      </View>
      <TagWrapper
        borderRadius={50}
        style={{ position: "absolute", top: 0, right: 0, margin: 10 }}
      >
        <CustomText style={{ color: "#F43939" }}>{props.time}</CustomText>
      </TagWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    gap: 15,
    padding: 10,
    borderRadius: 20,
    position: "relative",
  },
  textContainer: {
    flexDirection: "row",
  },
});
