import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "../components/UI/CustomText";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/Auth/Login");
    }, 2000);
  });

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <CustomText style={styles.text}>Hoop</CustomText>
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
