import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "../../components/UI/CustomText";
import TagWrapper from "../../components/UI/TagWrapper";
import {
  Attention,
  DottedLine,
  Location,
  LocationAndLine,
  Time,
} from "../../components/UI/Icons/Icons";
import Column from "../../components/UI/Column";
import Button from "../../components/UI/Button";

export default function TrackingPark() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../assets/images/maps.png")} />

        <View style={styles.boxContainer}>
          <Column gap={15} style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <View style={{ gap: 4 }}>
                <CustomText size={0.5} style={{ color: "#C8C8C8" }}>
                  Your Destination Address
                </CustomText>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <View style={{ paddingTop: 4 }}>
                    <LocationAndLine />
                  </View>
                  <CustomText size={1} fontWeight="bold">
                    123 Dhaka Street
                  </CustomText>
                </View>
                <View style={{ gap: 4 }}>
                  <CustomText size={0.5} style={{ color: "#C8C8C8" }}>
                    Your Address
                  </CustomText>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <View style={{ paddingTop: 4 }}>
                      <Location />
                    </View>
                    <CustomText size={1} fontWeight="bold">
                      123 Dhaka Street
                    </CustomText>
                  </View>
                </View>
              </View>
              <TagWrapper>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Time />
                  <CustomText size={0.5}>7 minutes</CustomText>
                </View>
              </TagWrapper>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#F4F4FA",
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 20,
                gap: 20
              }}
            >
              <Pressable
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              >
                <Image
                  source={require("../../assets/images/Info Circle (1).png")}
                />
              </Pressable>
              <Button
                backgroundColor="#130F26"
                onPress={() => {}}
                style={{ flex: 1 }}
              >
                <CustomText style={{ color: "white" }}>Start Now</CustomText>
              </Button>
            </View>
          </Column>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    height: "100%",
  },
  boxContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});
