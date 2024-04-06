import { useFonts } from "expo-font";
import { ReactElement, useEffect } from "react";
import { Text, TextStyle } from "react-native";

interface CustomTextType {
  children: string | string[] | ReactElement | ReactElement[];
  size?: number;
  style?: TextStyle | TextStyle[];
  fontWeight?: "light" | "medium" | "bold";
}

export default function CustomText({
  children,
  size,
  style,
  fontWeight,
}: CustomTextType) {
  const fontSizes: { [key: number]: number } = {
    1: 15,
    1.5: 17,
    2: 20,
    3: 25,
    4: 30,
    5: 40,
  };

  const fontWeights: { [key: string]: string } = {
    light: "Avenir-Light",
    medium: "Avenir-Medium",
    bold: "Avenir-Heavy",
  };

  return (
    <>
      <Text
        style={[
          {
            fontFamily: fontWeight ? fontWeights[fontWeight] : "Avenir-Medium",
            fontSize: fontSizes[size ? size : 1],
          },
          style,
        ]}
      >
        {children}
      </Text>
    </>
  );
}
