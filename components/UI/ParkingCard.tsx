import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";
import TagWrapper from "./TagWrapper";

interface ParkingCardProps {
  name: string;
  avenue: string;
  price?: string;
  timeAway: string;
  onPress?: () => void;
}

export default function ParkingCard({
  children,
  name,
  avenue,
  price,
  timeAway,
  onPress,
}: React.PropsWithChildren<ParkingCardProps>) {
  const { width } = Dimensions.get("window");

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>{children}</View>

      <View style={styles.textContainer}>
        <View style={{ gap: 20 }}>
          <View>
            <CustomText size={2}>{name}</CustomText>
            <CustomText style={{ color: "#2D2D2D80" }}>{avenue}</CustomText>
          </View>
          <View>
            <CustomText style={{ color: "#F43939" }}>
              <CustomText
                size={2}
                style={{ color: "#F43939", fontWeight: "bold" }}
              >{`${price}`}</CustomText>
              <CustomText style={{ color: "#F43939" }}>/hour</CustomText>
            </CustomText>
          </View>
        </View>
      </View>
      <TagWrapper
        borderRadius={50}
        style={{ position: "absolute", top: 0, right: 0, margin: 10 }}
      >
        <CustomText style={{ color: "#F43939" }}>{timeAway}</CustomText>
      </TagWrapper>
    </Pressable>
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
