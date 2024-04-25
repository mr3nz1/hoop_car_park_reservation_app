import React, { ReactElement } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface InputType {
  placeholder: string;
  password?: boolean;
  hideContent?: boolean;
  btnLeft?: React.JSX.Element;
  btnRight?: React.JSX.Element;
  backgroundColor?: string;
  placeholderTextColor?: string;
  textInputStyle?: TextStyle;
  onChangeText: (e: string) => void;
}

export default function Input({
  placeholder,
  password,
  hideContent,
  btnRight,
  btnLeft,
  backgroundColor,
  placeholderTextColor,
  textInputStyle,
  onChangeText,
}: InputType) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: backgroundColor ? backgroundColor : "white",
      paddingVertical: 15,
      paddingLeft: 20,
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
        style={[styles.textInput, textInputStyle]}
        placeholder={placeholder}
        cursorColor="#2D2D2D"
        secureTextEntry={hideContent}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(e) => {
          onChangeText(e);
        }}
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
