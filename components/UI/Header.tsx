import { ReactElement } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface Header {
  children: ReactElement;
}

export default function Header({ children }: Header) {
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#130F26",
    flex: 0.5
  },
  childrenContainer: {
    padding: 40,
  },
  roundedBottom: {
    height: 40,
    width: "100%",
    backgroundColor: "#F4F4FA",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
