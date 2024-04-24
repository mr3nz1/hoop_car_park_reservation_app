import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/UI/Header";
import { StatusBar } from "expo-status-bar";

import { useContext, useState } from "react";
import Column from "../../components/UI/Column";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Link, router } from "expo-router";
import ForgotPassword from "./ForgotPassword";
import CustomText from "../../components/UI/CustomText";
import { UserContext } from "../../store/user/UserContext";
import { AppwriteException, ID } from "react-native-appwrite/src";
import { account } from "../../appwrite/config";
import { ActivityIndicator } from "react-native-paper";

interface RegisterType {
  usePhone?: boolean;
}

export default function Register({ usePhone = true }: RegisterType) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function register(name: string, email: string, password: string) {
    try {
      const res = await account.create(ID.unique(), email, password, name);
      setIsLoading(false);
      router.push("/Auth/email");
    } catch (e) {
      const err = e as AppwriteException;
      setError(err.message);
    }
  }

  function handleSubmit() {
    if (userInfo.name === "") {
      return setError("Name is empty, fill in your full name");
    }

    if (userInfo.email === "") {
      return setError("Email is empty, fill in your full email");
    }

    if (userInfo.phone === "") {
      return setError("Phone is empty, fill in your full phone");
    }

    if (userInfo.email === "") {
      return setError("Password is empty, fill in your full password");
    }

    if (userInfo.password !== userInfo.passwordAgain) {
      return Alert.alert("Passwords don't match");
    }

    setIsLoading(true);
    return register(userInfo.name, userInfo.email, userInfo.password);
  }

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
        <Header backgroundColor="#130F26">
          <Text style={styles.text}>Glad to see you!</Text>
        </Header>
        <View style={styles.formContainer}>
          <ScrollView nestedScrollEnabled={true}>
            <Column gap={20} style={{ height: "100%" }}>
              <Input
                onChangeText={(e) => {
                  setUserInfo((prevInfo) => ({ ...prevInfo, name: e }));
                }}
                placeholder="Name"
              />
              <Input
                onChangeText={(e) => {
                  setUserInfo((prevInfo) => ({ ...prevInfo, email: e }));
                }}
                placeholder="Email"
              />
              <Input
                onChangeText={(e) => {
                  setUserInfo((prevInfo) => ({ ...prevInfo, password: e }));
                }}
                placeholder="Password"
                password={true}
                hideContent={true}
              />
              <Input
                onChangeText={(e) => {
                  setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    passwordAgain: e,
                  }));
                }}
                placeholder="Password Authentication"
                hideContent={true}
              />
              <Input
                onChangeText={(e) => {
                  setUserInfo((prevInfo) => ({ ...prevInfo, phone: e }));
                }}
                placeholder="Phone Number"
              />

              {error !== "" ? (
                <View
                  style={{
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 8,
                  }}
                >
                  <CustomText style={{ color: "#F43939" }}>{error}</CustomText>
                </View>
              ) : (
                <></>
              )}

              <Column gap={15} style={{ marginTop: "auto" }}>
                <Button onPress={handleSubmit} backgroundColor="#130F26">
                  {isLoading ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <CustomText style={{ color: "white", fontWeight: "bold" }}>
                      Register
                    </CustomText>
                  )}
                </Button>
                <Text style={{ alignSelf: "center" }}>
                  <Text style={{ color: "#2d2d2da0" }}>Have an account? </Text>
                  <Link href="/Auth/email">
                    <Text style={{ color: "#F43939", fontWeight: "bold" }}>
                      Sign In
                    </Text>
                  </Link>
                </Text>
              </Column>
            </Column>
          </ScrollView>
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
});
