import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import { Link } from "expo-router";
import Button from "../../components/UI/Button";
import { OtpInput } from "react-native-otp-entry";

interface RequestCodeType {}

export default function RequestCode({}: RequestCodeType) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Column style={styles.rowContainer} gap={40}>
              <Column gap={5} style={styles.rowContainer}>
                <Image
                  source={require("../../assets/images/enter_passcode_bg.png")}
                />

                <Column
                  style={{ justifyContent: "center", alignItems: "center" }}
                  gap={15}
                >
                  <CustomText
                    style={styles.textCenter}
                    fontWeight="light"
                    size={4}
                  >
                    Enter your Passcode
                  </CustomText>
                  <CustomText style={[styles.gray, styles.textCenter]}>
                    For the security of your account, please enter the security
                    code{" "}
                  </CustomText>
                </Column>

                <Column
                  style={{
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                  gap={1}
                >
                  <View style={{ width: 250 }}>
                    <OtpInput
                      numberOfDigits={4}
                      autoFocus={false}
                      // textInputProps={{ onFocus: () => Keyboard.dismiss() }}
                      focusColor="#F43939"
                      theme={{
                        pinCodeContainerStyle: {
                          borderWidth: 0,
                          borderBottomWidth: 1,
                          borderColor: "#c0c0c3",
                          borderBottomColor: "#c0c0c3",
                          width: 50,
                        },
                      }}
                    />
                  </View>
                </Column>
              </Column>

              <Column
                gap={15}
                style={{
                  // marginTop: "auto",
                  alignItems: "center",
                  paddingTop: 20,
                  // position: "absolute",
                  // bottom: 0,
                }}
              >
                <Image
                  source={require("../../assets/images/fingerprint_icon.png")}
                />
                <CustomText style={[styles.textCenter]}>
                  <CustomText style={[{}, styles.red]}>Scan </CustomText>
                  <CustomText style={styles.gray}>
                    to verify for easy security
                  </CustomText>
                </CustomText>
              </Column>
            </Column>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    padding: 15,
    height: "100%",
    flexDirection: "row",
  },
  rowContainer: {
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
