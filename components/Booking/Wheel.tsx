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
} from "@shopify/react-native-skia";
import { rotate } from "react-native-redash";

export default function Wheel() {
  const outerCircleRadius = 250;
  const innerCircleRadius = outerCircleRadius / 2.5;
  const middleCircleRadius = outerCircleRadius / 1.4;

  const numSquares = 6;

  const angleIncrement = (2 * Math.PI) / numSquares;

  const font = useFont(
    require("../../assets/fonts/Avenir/Avenir-Black.ttf"),
    14
  );
  if (font === null) {
    return null;
  }
  const blob = Skia.TextBlob.MakeFromText("Hello World!", font);

  let content: React.JSX.Element[] = [];

  for (let i = 0; i < numSquares; i++) {
    const angle = i * angleIncrement;
    const x = outerCircleRadius + middleCircleRadius * Math.cos(angle);
    const y = outerCircleRadius + middleCircleRadius * Math.sin(angle);

    content.push(
      <>
        <Group key={i} origin={{ x: x, y: y }}>
          <TextBlob
            blob={Skia.TextBlob.MakeFromText("1", font)}
            color="black"
            x={x}
            y={y}
            transform={[{ rotate: 0 }]}
          />
          <TextBlob
            blob={Skia.TextBlob.MakeFromText("Hours", font)}
            color="black"
            x={x - 13}
            y={y + 20}
            transform={[{ rotate: 0 }]}
          />
        </Group>
      </>
    );
  }

  // const trianglePointer = useSVG(
  //   require("../../assets/images/trianglePointer.svg")
  // );

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
        {/* {trianglePointer && (
          <ImageSVG
            svg={trianglePointer}
            width={256}
            height={256}
            x={outerCircleRadius}
            y={outerCircleRadius}
          />
        )} */}
        {content}
      </Canvas>

      {/* <SkiaText /> */}
    </>
  );
}
