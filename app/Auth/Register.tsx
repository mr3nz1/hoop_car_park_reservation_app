import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/UI/Header";
import { StatusBar } from "expo-status-bar";
import Form from "../../components/Register/Form";

interface RegisterType {
  usePhone?: boolean;
}

export default function Register({ usePhone = true }: RegisterType) {
  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor="#130F26"
        hidden={true}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <Header>
          <Text style={styles.text}>Glad to see you!</Text>
        </Header>
        <Form />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "200",
  },
});
