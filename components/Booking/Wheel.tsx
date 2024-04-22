import {
  Canvas,
  useCanvasRef,
  Circle,
  Group,
  Text,
  useFont,
  Skia,
  TextBlob,
  useSVG,
  ImageSVG,
  useFonts,
  matchFont,
} from "@shopify/react-native-skia";
import { rotate } from "react-native-redash";

interface Props {
  currentValue: number;
}

export default function Wheel({ currentValue }: Props) {
  const outerCircleRadius = 250;
  const innerCircleRadius = outerCircleRadius / 2.3;
  const middleCircleRadius = outerCircleRadius / 1.4;

  const numSquares = 6;

  const angleIncrement = (2 * Math.PI) / numSquares;

  const fontMgr = useFonts({
    Avenir: [
      require("../../assets/fonts/Avenir/Avenir-Light.ttf"),
      require("../../assets/fonts/Avenir/Avenir-Medium.ttf"),
      require("../../assets/fonts/Avenir/Avenir-Heavy.ttf"),
    ],
  });

  if (!fontMgr) {
    return null;
  }

  const boldFontStyle = {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 25,
  } as const;

  const mediumFontStyle = {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 20,
  } as const;

  const font1 = matchFont(boldFontStyle, fontMgr);
  const font2 = matchFont(mediumFontStyle, fontMgr);

  const hours: {
    id: number;
    hours: number;
  }[] = [
    { id: 1, hours: 1 },
    { id: 2, hours: 2 },
    { id: 3, hours: 3 },
    { id: 4, hours: 4 },
    { id: 5, hours: 5 },
    { id: 6, hours: 6 },
  ];

  let content: React.JSX.Element[] = [];

  return (
    <>
      <Canvas
        style={{
          width: outerCircleRadius * 2,
          height: outerCircleRadius * 2,
          borderRadius: 500,
          justifyContent: "center",
          backgroundColor: "transparent",
          alignItems: "center",
          transformOrigin: "center",
          transform: [{ rotate: "00deg" }],
        }}
      >
        <Circle
          r={outerCircleRadius}
          cy={outerCircleRadius}
          cx={outerCircleRadius}
          color="white"
        />
        <Circle
          r={innerCircleRadius}
          cy={outerCircleRadius}
          cx={outerCircleRadius}
          color={"#F4F4F4"}
        />
        <Circle
          r={middleCircleRadius}
          cy={outerCircleRadius}
          cx={outerCircleRadius}
          color={"white"}
          style={"stroke"}
        />
        {hours.map((currentIndex) => {
          const angle = currentIndex.id * angleIncrement;
          const x = outerCircleRadius + middleCircleRadius * Math.cos(angle);
          const y = outerCircleRadius + middleCircleRadius * Math.sin(angle);

          return (
            <Group key={currentIndex.id} origin={{ x: x, y: y }} transform={[{rotate: 95}]}>
              <Text
                text={`${currentIndex.id}`}
                y={y}
                x={x}
                color={
                  currentValue !== currentIndex.hours ? "black" : "#ABABAB"
                }
                font={font1}
                // transformOrigin
                // transform={[{rotate}]}
              />
              <Text
                text={`Hours`}
                y={y + 20}
                x={x - 18}
                color={
                  currentValue !== currentIndex.hours ? "black" : "#ABABAB"
                }
                font={font2}
              />
            </Group>
          );
        })}
        {/* {content} */}
      </Canvas>
    </>
  );
}
