import { ReactElement } from "react";
import { Text, TextStyle } from "react-native";

interface CustomTextType {
  children: string | string[] | ReactElement | ReactElement[];
  size?: number;
  style?: TextStyle;
}

export default function CustomText({ children, size, style }: CustomTextType) {
  const fontSizes: { [key: number]: number } = {
    1: 17,
    2: 24,
    3: 30,
    4: 36,
    5: 42,
  };

  return (
    <>
      <Text
        style={[
          {
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
