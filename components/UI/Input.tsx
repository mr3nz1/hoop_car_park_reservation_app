import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface InputType {
  placeholder: string;
  password?: boolean;
  hideContent?: boolean;
  btn?: React.JSX.Element;
}

export default function Input({
  placeholder,
  password,
  hideContent,
  btn,
}: InputType) {
  return (
    <View style={styles.container}>
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
      {btn}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Avenir-Medium",
  },
  icon: {
    // position: "absolute",
  },
});
