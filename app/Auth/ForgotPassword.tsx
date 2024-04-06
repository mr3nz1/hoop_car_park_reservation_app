import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../../components/UI/Input";
import Column from "../../components/UI/Column";
import Button from "../../components/UI/Button";
import CustomText from "../../components/UI/CustomText";

interface ForgotPasswordType {}

export default function ForgotPassword({}: ForgotPasswordType) {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Column gap={20} style={{ height: "100%" }}>
          <Column gap={15}>
            <CustomText style={{ color: "#2D2D2D" }} size={2}>
              Reset Password
            </CustomText>
            <CustomText style={{ color: "#69696B" }} size={1}>
              Enter the email associated with your account and we’ll send an
              email with instructions to reset your password.
            </CustomText>
          </Column>

          <Column gap={15}>
            <CustomText style={{ fontSize: 17, fontWeight: "300" }}>
              Email address
            </CustomText>
            <Input placeholder="Email" />
          </Column>

          <Button
            backgroundColor="#130F26"
            onPress={() => {}}
            style={{ marginTop: "auto" }}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Send</Text>
          </Button>
        </Column>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F4F4FA",
    padding: 25,
  },
});
