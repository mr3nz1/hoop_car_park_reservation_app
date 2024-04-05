import { ReactElement } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface ColumnType {
  children: ReactElement | ReactElement[];
  gap: number;
  style?: ViewStyle;
}

export default function Column({ children, gap, style }: ColumnType) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: gap,
    },
  });
  return <View style={[styles.container, style]}>{children}</View>;
}
