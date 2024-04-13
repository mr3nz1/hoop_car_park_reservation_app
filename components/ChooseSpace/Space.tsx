import { Image, View } from "react-native";

export default function Space() {
  return (
    <View style={{ borderRightColor: "black", borderRightWidth: 1 }}>
      <View
        style={{
          width: 150,
          height: 80,
          borderTopWidth: 1,
          borderTopColor: "#A4A4A8",
          borderStyle: "dashed",
          borderBottomWidth: 1,
          borderBottomColor: "#A4A4A8",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../../assets/images/car.png")} />
      </View>
      <View
        style={{
          width: 150,
          height: 80,
          borderTopWidth: 1,
          borderTopColor: "#A4A4A8",
          borderStyle: "dashed",
          borderBottomWidth: 1,
          borderBottomColor: "#A4A4A8",
        }}
      ></View>
    </View>
  );
}
