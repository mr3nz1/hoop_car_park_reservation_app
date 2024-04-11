import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import CustomText from "../UI/CustomText";

export default function Item({ item }: any) {
  const { width } = Dimensions.get(`screen`);

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.image}>
        <Image source={item.image} />
      </View>
      <View style={styles.content}>
        <CustomText size={3} style={styles.title}>
          {item.title}
        </CustomText>
        <CustomText style={styles.greating}>{item.greating}</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  greating: {
    textAlign: "center",
    color: "#2D2D2D80",
    paddingHorizontal: 70,
  },
  image: {
    width: "100%",
    alignItems: "center",
  },
  content: {},
  skip: {
    textAlign: "right",
  },
});
