import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputType {
  placeholder: string;
}

export default function Input({ placeholder }: InputType) {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        cursorColor="#2D2D2D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
  },
});
