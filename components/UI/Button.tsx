import { ReactElement } from "react";
import { Image, Pressable, StyleSheet, Text, ViewStyle } from "react-native";

interface ButtonType {
  backgroundColor: string;
  onPress: () => void;
  children: ReactElement | ReactElement[];
  style?: ViewStyle;
}

export default function Button({
  backgroundColor,
  onPress,
  children,
  style,
}: ButtonType) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      gap: 8,
      width: "100%",
      backgroundColor: backgroundColor,
      padding: 20,
      borderRadius: 15,
    },
  });

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
}
