import { ReactElement, useEffect, useState } from "react";
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
  const [isPressed, setIsPressed] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      gap: 8,
      width: "100%",
      backgroundColor: backgroundColor,
      padding: 15,
      borderRadius: 15,
      opacity: isPressed ? 0.7 : 1,
    },
  });

  useEffect(() => {
    if (isPressed) {
      setTimeout(() => {
        setIsPressed(false);
      }, 100);
    }
  }, [isPressed]);

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={(e) => {
        setIsPressed(true);
        onPress();
      }}
    >
      {children}
    </Pressable>
  );
}
