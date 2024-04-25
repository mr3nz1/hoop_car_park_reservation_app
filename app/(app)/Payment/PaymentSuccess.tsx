import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Column from "../../../components/UI/Column";
import CustomText from "../../../components/UI/CustomText";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import { Link, router } from "expo-router";
import { EmailIcon, MessageIcon } from "../../../components/UI/Icons/Icons";

export default function PaymentSuccess() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Column style={styles.rowContainer} gap={20}>
        <Column gap={30} style={styles.rowContainer}>
          <Image source={require("../../../assets/images/payment_img_bg.png")} />

          <Column
            style={{ justifyContent: "center", alignItems: "center" }}
            gap={4}
          >
            <CustomText style={styles.textCenter} fontWeight="medium" size={4}>
              Payment Success
            </CustomText>
            <CustomText style={[styles.gray, styles.textCenter]}>
              Congrats on your reserved parking space
            </CustomText>
          </Column>

          <Column
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={10}
          >
            <CustomText size={2}>Receipt</CustomText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Link
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  borderRadius: 10,
                }}
                href=""
              >
                <EmailIcon />
              </Link>

              <Link
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  borderRadius: 10,
                }}
                href=""
              >
                <MessageIcon />
              </Link>
            </View>
          </Column>
        </Column>

        <Button onPress={() => {
          router.push("/Parking/ParkingRoute")
        }} backgroundColor="#130F26" style={{ marginTop: "auto", width: "100%" }}>
            <CustomText size={1.5} style={{ color: "white" }}>
              Back to Home
            </CustomText>
        </Button>
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
    flex: 1,
  },
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
  },
});
