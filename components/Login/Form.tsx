import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import Column from "../UI/Column";
import Button from "../UI/Button";

export default function Form() {
  return (
    <View style={styles.container}>
      <Column gap={20}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Text style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: "#2D2D2D", opacity: 0.5 }}>
            Forgot Password?{" "}
          </Text>
          <Text style={{ color: "#F43939", fontWeight: "bold" }}>Retrieve</Text>
        </Text>
        <Button
          onPress={() => {
            console.log("Hi");
          }}
          backgroundColor="#130F26"
          style={{ marginTop: "auto" }}
        >
          <Text style={styles.text}>Login</Text>
        </Button>
      </Column>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  text: {
    color: "white",
  },
});
