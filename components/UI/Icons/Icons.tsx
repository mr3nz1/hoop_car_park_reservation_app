import { Svg, Path, Circle } from "react-native-svg";

export function RightChevron() {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.66675 3.33329L10.3334 7.99996L5.66675 12.6666"
        stroke="#2D2D2D"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function UpChevron() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.33341 10.3333L8.00008 5.66659L12.6667 10.3333"
        stroke="#2D2D2D"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Add() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="10" fill="#F43939" />
      <Path
        d="M10.0001 13.3332V9.99984M10.0001 9.99984V6.6665M10.0001 9.99984H13.3334M10.0001 9.99984H6.66675"
        stroke="white"
        stroke-width="0.833333"
        stroke-linecap="round"
      />
    </Svg>
  );
}
