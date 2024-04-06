import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/UI/Header";
import { StatusBar } from "expo-status-bar";
import Form from "../../components/Login/Form";
import CustomText from "../../components/UI/CustomText";

interface LoginType {
  usePhone?: boolean;
}

export default function Login({ usePhone = true }: LoginType) {
  return (
    <>
      <StatusBar
        style="dark"
        animated={true}
        backgroundColor="#130F26"
        hidden={true}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <Header backgroundColor="#130F26">
          <CustomText style={styles.text}>Glad to see you!</CustomText>
        </Header>
        <Form usePhone={usePhone} />
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
