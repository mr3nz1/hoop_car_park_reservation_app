import { Image, ScrollView, StyleSheet, View } from "react-native";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import Button from "../../components/UI/Button";
import { Link } from "expo-router";

export default function OpenEmailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Column style={styles.rowContainer} gap={20}>
        <Column gap={30} style={styles.rowContainer}>
          <Image source={require("../../assets/images/email_otp_bg.png")} />

          <Column
            style={{ justifyContent: "center", alignItems: "center" }}
            gap={15}
          >
            <CustomText style={styles.textCenter} fontWeight="medium" size={4}>
              Check your Email
            </CustomText>
            <CustomText style={[styles.gray, styles.textCenter]}>
              We have sent a password recover instructions to your email.
            </CustomText>
          </Column>

          <Column
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={1}
          >
            <View style={{ width: 250 }}>
              <Button backgroundColor="#130F26" onPress={() => {}}>
                <CustomText
                  style={{ color: "white", width: "100%", textAlign: "center" }}
                >
                  <Link href="/Auth/RequestCode">Open Email</Link>
                </CustomText>
              </Button>
            </View>

            <CustomText style={[styles.gray, styles.textCenter]}>
              Skip I'll confirm later
            </CustomText>
          </Column>
        </Column>

        <CustomText style={[styles.textCenter, { marginTop: "auto" }]}>
          <CustomText style={styles.gray}>
            Didn’t receive the email? Check your spam filter, or{" "}
          </CustomText>
          <CustomText style={[{ marginTop: "auto" }, styles.red]}>
            <Link href="/Auth/Login">try another email address</Link>
          </CustomText>
        </CustomText>
      </Column>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    padding: 25,
    height: "100%",
    flexDirection: "row",
  },
  rowContainer: {
    justifyContent: "center",
    alignItems: "center",
    // height: "100%",
    flex: 1
  },
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
