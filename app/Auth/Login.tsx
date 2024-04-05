import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/UI/Header";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor="#130F26"
        hidden={true}
      />
      <View style={styles.container}>
        <Header>
          <Text style={styles.text}>Glad to see you!</Text>
        </Header>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "200"
  },
  container: {
  }
});
