import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import Column from "../UI/Column";
import Button from "../UI/Button";
import { Link } from "expo-router";
import CustomText from "../UI/CustomText";

interface FormType {
  usePhone?: boolean;
}

export default function Form({ usePhone }: FormType) {
  return (
    <View style={styles.container}>
      <Column gap={20} style={{ height: "100%" }}>
        <Input placeholder={usePhone ? "+62 " : "Email"} />
        <Input placeholder="Password" password={true} hideContent={true} />
        <CustomText style={{ alignSelf: "flex-end" }}>
          <CustomText style={{ color: "#2d2d2da0", opacity: 0.5 }}>
            Forgot Password?{" "}
          </CustomText>
          <Link href="/Auth/ForgotPassword">
            <CustomText style={{ color: "#F43939", fontWeight: "bold" }}>
              Retrieve
            </CustomText>
          </Link>
        </CustomText>
        <Column gap={15} style={{ marginTop: "auto" }}>
          <Button
            onPress={() => {
              console.log("Hi");
            }}
            backgroundColor="#130F26"
          >
            <Link href="/Parking/HomeScreen">
              <CustomText style={styles.text}>Login</CustomText>
            </Link>
          </Button>
          <CustomText style={{ alignSelf: "center" }}>
            <CustomText style={{ color: "#2d2d2da0" }}>
              Don't have an account?{" "}
            </CustomText>
            <Link href="/Auth/Register">
              <CustomText style={{ color: "#F43939", fontWeight: "bold" }}>
                Sign Up
              </CustomText>
            </Link>
          </CustomText>
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
