import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/UI/Header";
import { StatusBar } from "expo-status-bar";
import CustomText from "../../components/UI/CustomText";
import { Link, router, useLocalSearchParams } from "expo-router";
import Column from "../../components/UI/Column";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useContext, useState } from "react";
import { account } from "../../appwrite/config";
import { UserContext } from "../../store/user/UserContext";
import { ActivityIndicator } from "react-native-paper";

export default function Login() {
  const { loginType } = useLocalSearchParams();
  let usePhone;

  if (loginType === "phone") {
    usePhone = true;
  } else {
    usePhone = false;
  }

  const { setUser } = useContext(UserContext!);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function login() {
    try {
      await account.createEmailSession(loginInfo.email, loginInfo.password);

      const { email, name } = await account.get();

      setUser({ email, name });

      router.push("Parking/HomeScreen");
      setIsLoading(false);
    } catch (err: { code: number; type: string; description: string }) {
      setIsLoading(false);
      console.log(err.code);
      Alert.alert("Error logging in");
    }
  }

  function handleSubmit() {
    setIsLoading(true);
    login();
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <Header backgroundColor="#130F26">
          <CustomText style={styles.text}>Glad to see you!</CustomText>
        </Header>
        <View style={styles.formContainer}>
          <Column gap={20} style={{ height: "100%" }}>
            {usePhone ? (
              <Input onChangeText={(e) => {}} placeholder={"+62"} />
            ) : (
              <Input
                onChangeText={(e) => {
                  setLoginInfo((prevLoginInfo) => ({
                    ...prevLoginInfo,
                    email: e,
                  }));
                }}
                placeholder={"Email"}
              />
            )}
            <Input
              onChangeText={(e) => {
                setLoginInfo((prevLoginInfo) => ({
                  ...prevLoginInfo,
                  password: e,
                }));
              }}
              placeholder="Password"
              password={true}
              hideContent={true}
            />
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
              <Button onPress={handleSubmit} backgroundColor="#130F26">
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <CustomText style={styles.formTextColor}>Login</CustomText>
                )}
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
  formContainer: {
    padding: 20,
    flexGrow: 1,
    flex: 0.5,
  },
  formTextColor: {
    color: "white",
  },
});
