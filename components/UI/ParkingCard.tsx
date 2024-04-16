import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";
import TagWrapper from "./TagWrapper";

interface ParkingCardProps {
  head: string;
  hello: string;
  dollar?: string;
  hr: string;
  time: string;
  onprogress?: () => void;
}

export default function ParkingCard({
  children,
  head,
  hello,
  dollar,
  hr,
  time,
  onprogress,
}: React.PropsWithChildren<ParkingCardProps>) {
  const { width } = Dimensions.get("window");

  return (
    <Pressable onPress={onprogress} style={styles.container}>
      <View>{children}</View>

      <View style={styles.textContainer}>
        <View style={{ gap: 20 }}>
          <View>
            <CustomText size={2}>{head}</CustomText>
            <CustomText style={{ color: "#2D2D2D80" }}>{hello}</CustomText>
          </View>
          <View>
            <CustomText style={{ color: "#F43939" }}>
              <CustomText size={2}>{`${dollar}`}</CustomText>
              <CustomText size={0.5}>{hr}</CustomText>
            </CustomText>
          </View>
        </View>
      </View>
      <TagWrapper
        borderRadius={50}
        style={{ position: "absolute", top: 0, right: 0, margin: 10 }}
      >
        <CustomText style={{ color: "#F43939" }}>{time}</CustomText>
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
