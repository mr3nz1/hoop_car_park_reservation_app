import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface InputType {
  placeholder: string;
  password?: boolean;
  hideContent?: boolean;
  btnLeft?: React.JSX.Element;
  btnRight?: React.JSX.Element;
}

export default function Input({
  placeholder,
  password,
  hideContent,
  btnRight,
  btnLeft,
}: InputType) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "white",
      paddingVertical: 15,
      paddingLeft: btnLeft ? 0 : 20,
      paddingRight: 20,
      borderRadius: 15,
    },
    textInput: {
      flex: 1,
      fontSize: 17,
      fontFamily: "Avenir-Medium",
      marginLeft: btnLeft ? 10 : 0,
    },
    icon: {
      // position: "absolute",
    },
  });
  return (
    <View style={styles.container}>
      {btnLeft}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        cursorColor="#2D2D2D"
        secureTextEntry={hideContent}
      />
      {password && (
        <Image
          style={styles.icon}
          source={require("../../assets/images/fluent_eye-off-16-filled.png")}
        />
      )}
      {btnRight}
    </View>
  );
}
