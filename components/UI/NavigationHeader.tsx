import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";

interface NavigationHeader {
  navigation: any;
  title: string;
  absolute?: boolean;
}

export default function NavigationHeader({
  navigation,
  title,
  absolute,
}: NavigationHeader) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: absolute ? "rgba(0,0,0,0)" : "#F4F4FA",
      position: "absolute",
      top: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 30,
      alignItems: "center",
      paddingTop: 60,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    button: {
      backgroundColor: "#EAEAF3",
      padding: 10,
      borderRadius: 10,
    },
    image: {
      width: 25,
      height: 25,
    },
    text: {
      fontSize: 25,
      textAlign: "center",
      flex: 1,
    },
  });
  const [isBackPressed, setIsBackPressed] = useState(false);

  useEffect(() => {
    if (isBackPressed) {
      setTimeout(() => {
        setIsBackPressed(false);
        return navigation.goBack();
      });
    }
  }, [isBackPressed]);

  function handleGoBack() {
    setIsBackPressed(true);
  }

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={handleGoBack}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Arrow - Left 2.png")}
          />
        </Pressable>

        {!absolute && (
          <CustomText size={3} style={styles.text}>
            {title}
          </CustomText>
        )}

        <View></View>
        <View></View>
      </View>
    </>
  );
}
