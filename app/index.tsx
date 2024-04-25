import { useFonts } from "expo-font";
import { SplashScreen, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { UserContext } from "../store/user/UserContext";
import { account, client } from "../appwrite/config";
import { Account } from "react-native-appwrite/src";

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    "Avenir-Black": require("../assets/fonts/Avenir/Avenir-Black.ttf"),
    "Avenir-Light": require("../assets/fonts/Avenir/Avenir-Light.ttf"),
    "Avenir-Medium": require("../assets/fonts/Avenir/Avenir-Medium.ttf"),
    "Avenir-Heavy": require("../assets/fonts/Avenir/Avenir-Heavy.ttf"),
  });
  const { setUser } = useContext(UserContext);
  // const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      if (fontsLoaded) {
        try {
          // if (jwt) {
          //   const { email, name } = await account.get();
          //   setUser({ email, name });
          //   router.push("Parking/HomeScreen");
          //   await SplashScreen.hideAsync();
          // } else {
          router.push("/OnBoarding/OnBoarding");
          // }
        } catch (err) {
          console.log(err);
          // setIsTokenValid(false);
        }
      }
    }
    loadFonts();
  }, [fontsLoaded]);

  // console.log(isTokenValid);

  // useEffect(() => {
  //   if (!isTokenValid) {
  //     router.push("/OnBoarding/OnBoarding");
  //   }
  // }, [isTokenValid]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
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
