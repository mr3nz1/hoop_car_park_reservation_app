import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";

interface NavigationHeader {
  navigation: any;
}

export default function NavigationHeader({ navigation }: NavigationHeader) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F4F4FA",
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 30,
      alignItems: "center",
      paddingTop: 60,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    button: {
      backgroundColor: "#2d2d2d14",
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

        <CustomText size={3} style={styles.text}>Forgot Password</CustomText>
      </View>
    </>
  );
}
