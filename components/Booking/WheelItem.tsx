import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  index: number;
  contentOffset: SharedValue<number>;
  item: any;
}

const WheelItem: React.FC<Props> = ({ index, item, contentOffset }) => {
  const { width, height } = useWindowDimensions();
  const listItemWidth = width / 4;
  const listItemHeight = height / 8;
  //   const

  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * listItemWidth,
      (index - 1) * listItemWidth,
      index * listItemWidth,
      (index + 1) * listItemWidth,
      (index + 2) * listItemWidth,
    ];

    const translateYOutputRange = [
      0,
      -listItemWidth / 3,
      -listItemWidth / 2,
      -listItemWidth / 3,
      0,
    ];

    const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          translateY: translateY,
        },
        // Padding left is better than translateX
        // {
        //   translateX: listItemWidth / 2 + listItemWidth,
        // },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          width: listItemWidth,
          aspectRatio: 1,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}
    >
      <View
        style={{
          backgroundColor: "red",
          margin: 3,
          flex: 1,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{item.hours} Hours</Text>
      </View>
    </Animated.View>
  );
};

export default WheelItem;