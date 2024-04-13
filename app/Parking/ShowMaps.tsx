import { Image, StyleSheet, ScrollView, View } from "react-native";
import Input from "../../components/UI/Input";
import { Search } from "../../components/UI/Icons/Icons";
import MapView from "react-native-maps";
import CustomText from "../../components/UI/CustomText";
import Column from "../../components/UI/Column";
import TagWrapper from "../../components/UI/TagWrapper";

export default function ShowMaps() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            // borderBottomRightRadius: 40,
            // borderBottomLeftRadius: 40,
            // backgroundColor: "red",
            flex: 1,
            overflow: "hidden",
            alignItems: "stretch",
            justifyContent: "flex-end",
            width: "100%",
            // backgroundColor: "red",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            source={require("../../assets/images/Group 247 (1).png")}
            style={{ width: "100%", height: "100%" }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 20,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Column gap={30}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 40,
                }}
              >
                <Column gap={1}>
                  <CustomText size={3}>Parking Spots</CustomText>
                  <CustomText>123 Dhaka Street</CustomText>
                </Column>
                <TagWrapper borderRadius={100}>
                  <CustomText size={1.5} style={{ color: "#F43939" }}>
                    $6
                  </CustomText>
                </TagWrapper>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
              >
                <Image source={require("../../assets/images/parking.png")} />
                <Image source={require("../../assets/images/road.png")} />
                <Image source={require("../../assets/images/parking.png")} />
              </ScrollView>
            </Column>
          </View>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Input
            btnLeft={<Search color="#919193" />}
            placeholder="Parking address"
            backgroundColor="#f4f4f4"
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    height: "100%",
  },
});
