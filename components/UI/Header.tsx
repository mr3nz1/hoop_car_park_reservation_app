import { ReactElement } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface Header {
  children: ReactElement;
}

export default function Header({ children }: Header) {
  return (
    <>
      <ImageBackground
        source={require("../../assets/images/pattern_img.png")}
        style={styles.container}
      >
        {children}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#130F26",
    padding: 40,
  },
});
