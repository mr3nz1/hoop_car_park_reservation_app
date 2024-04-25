import { SplashScreen, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useContext, useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { UserContext } from "./store/user/UserContext";
import { account } from "./appwrite/config";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    "Avenir-Black": require("../assets/fonts/Avenir/Avenir-Black.ttf"),
    "Avenir-Light": require("../assets/fonts/Avenir/Avenir-Light.ttf"),
    "Avenir-Medium": require("../assets/fonts/Avenir/Avenir-Medium.ttf"),
    "Avenir-Heavy": require("../assets/fonts/Avenir/Avenir-Heavy.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      router.push("/OnBoarding/OnBoarding");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image source={require("../assets/images/hoop.png")} />
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
