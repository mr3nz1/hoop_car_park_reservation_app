import { ScrollView, StyleSheet, View } from "react-native";
import Column from "../../../components/UI/Column";
import ParkingImageShowcase from "../../../components/UI/ParkingImageShowcase";
import ParkingDetails from "../../../components/UI/ParkingDetails";
import Input from "../../../components/UI/Input";
import CustomText from "../../../components/UI/CustomText";
import Button from "../../../components/UI/Button";
import { Link } from "expo-router";

export default function Payment() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Column gap={20}>
          <Column
            gap={20}
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              borderRadius: 20,
            }}
          >
            <ParkingImageShowcase variant={true} />
            <ParkingDetails
              name="Graha Mall"
              location="123 Dhaka Street"
              distanceAway="A-6"
              timeAway="4 hours"
            />
          </Column>

          <View style={{}}>
            <Input
              placeholder="Input voucher code"
              btnRight={<CustomText style={styles.red}>Use</CustomText>}
            />
          </View>

          <Column
            gap={10}
            style={{ backgroundColor: "white", padding: 20, borderRadius: 20 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText size={1.5} style={[styles.gray]}>
                Sub total
              </CustomText>
              <CustomText size={1.5}>$30.00</CustomText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText size={1.5} style={[styles.gray]}>
                Insurance
              </CustomText>
              <CustomText size={1.5}>$5.00</CustomText>
            </View>

            <View
              style={{ height: 1, width: "100%", backgroundColor: "#F4F4FA" }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText size={2}>Total</CustomText>
              <CustomText size={2}>$35.00</CustomText>
            </View>
          </Column>

          <Button
            onPress={() => {}}
            backgroundColor="#130F26"
            style={{ marginBottom: 40 }}
          >
            <Link href="/Payment/PaymentDetails">
              <CustomText style={{ color: "white" }}>Pay Now</CustomText>
            </Link>
          </Button>
        </Column>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
  },
});
