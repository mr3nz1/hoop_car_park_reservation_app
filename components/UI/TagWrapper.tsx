import { Children, ReactElement } from "react";
import { StyleSheet, View } from "react-native";

interface TagWrapperType {
  children: ReactElement;
}

export default function TagWrapper({ children }: TagWrapperType) {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3F3",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8
  },
});
