import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface InputType {
  placeholder: string;
  password?: boolean;
}

export default function Input({ placeholder, password }: InputType) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        cursorColor="#2D2D2D"
      />
      {password && (
        <Image
          style={styles.icon}
          source={require("../../assets/images/fluent_eye-off-16-filled.png")}
        />
      )}
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
    padding: 15,
    borderRadius: 15,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    // position: "absolute",
  },
});
