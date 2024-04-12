import { ReactElement } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface Header {
  children: ReactElement | ReactElement[];
  backgroundColor: string;
}

export default function Header({ children, backgroundColor }: Header) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 0.5,
    },
    childrenContainer: {
      paddingVertical: 40,
      paddingHorizontal: 20,
    },
    roundedBottom: {
      height: 40,
      width: "100%",
      backgroundColor: "#F4F4FA",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
  });

  return (
    <>
      <View>
        <ImageBackground
          source={require("../../assets/images/pattern_img.png")}
          style={styles.container}
        >
          <View style={styles.childrenContainer}>{children}</View>
          <View style={styles.roundedBottom}></View>
        </ImageBackground>
      </View>
    </>
  );
}
