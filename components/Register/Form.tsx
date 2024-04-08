import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import Column from "../UI/Column";
import Button from "../UI/Button";
import { Link } from "expo-router";
import CustomText from "../UI/CustomText";

interface FormType {}

export default function Form({}: FormType) {
  return (
    <View style={styles.container}>
      <Column gap={20} style={{ height: "100%" }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" password={true} hideContent={true} />
        <Input placeholder="Password Authentication" hideContent={true} />
        <Input placeholder="Phone Number" />
        <Column gap={15} style={{ marginTop: "auto" }}>
          <Button
            onPress={() => {
              console.log("Hi");
            }}
            backgroundColor="#130F26"
          >
            <Text style={styles.text}>Login</Text>
          </Button>
          <Text style={{ alignSelf: "center" }}>
            <Text style={{ color: "#2d2d2da0" }}>Have an account? </Text>
            <Link href="/Auth/Login">
              <Text style={{ color: "#F43939", fontWeight: "bold" }}>
                Sign In
              </Text>
            </Link>
          </Text>
        </Column>
      </Column>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    flex: 0.5,
  },
  text: {
    color: "white",
  },
});
