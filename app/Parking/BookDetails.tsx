import { Image, ScrollView, StyleSheet, View } from "react-native";
import Column from "../../components/UI/Column";
import ParkingImageShowcase from "../../components/UI/ParkingImageShowcase";
import CustomText from "../../components/UI/CustomText";
import TagWrapper from "../../components/UI/TagWrapper";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/UI/Button";
import { Link, router } from "expo-router";

interface BookDetailsType {}

export default function BookDetails() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Column gap={20}>
          <ParkingImageShowcase />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <View>
              <CustomText style={styles.textCenter} size={3}>
                Graha Mall
              </CustomText>
              <CustomText
                style={[
                  styles.textCenter,
                  {
                    color: "#7D7D7F",
                  },
                ]}
              >
                123 Dhaka Street
              </CustomText>
            </View>

            <TagWrapper>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Image source={require("../../assets/images/Location.png")} />
                <CustomText style={styles.red}>$10/h</CustomText>
              </View>
            </TagWrapper>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              gap: 20,
            }}
          >
            <Column
              gap={20}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                paddingVertical: 30,
                borderRadius: 20,
                flex: 0.5,
              }}
            >
              <TagWrapper>
                <Image source={require("../../assets/images/Location.png")} />
              </TagWrapper>

              <Column gap={1}>
                <CustomText style={styles.textCenter}>A-6</CustomText>

                <CustomText style={[styles.textCenter, styles.gray]}>
                  Parking Place
                </CustomText>
              </Column>
            </Column>
            <Column
              gap={20}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                paddingVertical: 10,
                borderRadius: 20,
                flex: 0.5,
              }}
            >
              <TagWrapper>
                <Image
                  source={require("../../assets/images/Time Circle.png")}
                />
              </TagWrapper>

              <Column gap={1}>
                <CustomText style={styles.textCenter}>4 h</CustomText>

                <CustomText style={[styles.textCenter, styles.gray]}>
                  Time
                </CustomText>
              </Column>
            </Column>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
              backgroundColor: "white",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <TagWrapper style={{paddingHorizontal: 8}}>
                <Image source={require("../../assets/images/Activity.png")} />
              </TagWrapper>
              <CustomText size={1.5}>Include Insurance</CustomText>
            </View>
            <CustomText size={1.5}>$5/h</CustomText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 30,
              paddingBottom: 40,
            }}
          >
            <CustomText fontWeight="bold" size={2}>
              $35,00
            </CustomText>

            <Button
              onPress={() => {
                router.push("/Payment/Payment");
              }}
              backgroundColor="#130F26"
              style={{ flex: 1 }}
            >
              <CustomText style={{ color: "white" }}>Pay</CustomText>
            </Button>
          </View>
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
