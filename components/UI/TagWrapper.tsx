import { Children, ReactElement } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface TagWrapperType {
  children: ReactElement;
  borderRadius?: number;
  style?: ViewStyle;
}

export default function TagWrapper({ children, borderRadius, style }: TagWrapperType) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF3F3",
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: borderRadius ? borderRadius : 8,
    },
  });

  return (
    <>
      <View style={[styles.container, style]}>{children}</View>
    </>
  );
}
