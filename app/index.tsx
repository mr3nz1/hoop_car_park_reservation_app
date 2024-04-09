import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/UI/CustomText";
import { useFonts } from "expo-font";

export default function SplashScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "Avenir-Black": require("../assets/fonts/Avenir/Avenir-Black.ttf"),
    "Avenir-Light": require("../assets/fonts/Avenir/Avenir-Light.ttf"),
    "Avenir-Medium": require("../assets/fonts/Avenir/Avenir-Medium.ttf"),
    "Avenir-Heavy": require("../assets/fonts/Avenir/Avenir-Heavy.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      if (fontsLoaded || fontError) {
        router.push("/Onbording")
      }
    }, 2000);
  });

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Image source={require("../assets/images/splash_logo.png")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAF3",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    backgroundColor: "#F43939",
    fontSize: 50,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
  },
});
