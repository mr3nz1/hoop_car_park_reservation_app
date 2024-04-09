import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomText from "../../components/UI/CustomText";
import Column from "../../components/UI/Column";
import { OtpInput } from "react-native-otp-entry";

interface RequestOtpType {}

export default function RequestOtp({}: RequestOtpType) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Column
          gap={40}
          style={{
            // justifyContent: "center",
            alignItems: "center",
            padding: 30,
            width: "100%",
          }}
        >
          <CustomText size={2} style={{ textAlign: "center" }}>
            We have send an OTP on given number +62 8123456789
          </CustomText>

          {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
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
          {/* </TouchableWithoutFeedback> */}

          {/* use this to style the keyboard react-native-keyboard-input
           */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Image source={require("../../assets/images/Time Circle.png")} />
            <CustomText style={{ color: "#F43939" }}>00:47</CustomText>
          </View>
        </Column>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    padding: 25,
    height: "100%",
    flexDirection: "row",
  },
});
