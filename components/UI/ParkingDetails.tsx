import { Image, StyleSheet, View } from "react-native";
import Column from "./Column";
import CustomText from "./CustomText";
import TagWrapper from "./TagWrapper";

interface ParkingDetailsType {
  name: string;
  location: string;
  distanceAway: string;
  timeAway: string;
}

export default function ParkingDetails({
  name,
  location,
  distanceAway,
  timeAway,
}: ParkingDetailsType) {
  return (
    <>
      <Column gap={10} style={{}}>
        <View>
          <CustomText style={styles.textCenter} size={3}>
            {name}
          </CustomText>
          <View style={{ alignItems: "center" }}>
            <CustomText
              style={[
                styles.textCenter,
                {
                  backgroundColor: "red",
                  color: "#7D7D7F",
                },
              ]}
            >
              {location}
            </CustomText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            gap: 20,
          }}
        >
          <TagWrapper>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image source={require("../../assets/images/Location.png")} />
              <CustomText style={styles.red}>{distanceAway}</CustomText>
            </View>
          </TagWrapper>
          <TagWrapper>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image source={require("../../assets/images/Time Circle.png")} />
              <CustomText style={styles.red}>{timeAway}</CustomText>
            </View>
          </TagWrapper>
        </View>
      </Column>
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
