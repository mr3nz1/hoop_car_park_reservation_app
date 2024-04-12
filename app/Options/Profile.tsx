import { Image, Pressable, View, ScrollView, StyleSheet } from "react-native";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import Header from "../../components/UI/Header";
import {
  SettingsIcon,
  FAQIcon,
  GoProIcon,
  LogoutIcon,
  RightChevron,
  TermsAndConditionsIcon,
  UserIcon,
  HeadphonesIcon,
} from "../../components/UI/Icons/Icons";
import Button from "../../components/UI/Button";

export default function Profile() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Header backgroundColor="#081024">
          <Column gap={30}>
            <CustomText
              size={3}
              style={{ color: "white", textAlign: "center" }}
            >
              Profile
            </CustomText>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                gap: 20,
              }}
            >
              <Image source={require("../../assets/images/Ellipse 19.png")} />
              <Column gap={0.5}>
                <CustomText style={{ color: "#8B8E98" }}>Welcome</CustomText>
                <CustomText size={3} style={{ color: "white" }}>
                  Diane
                </CustomText>
              </Column>
              <Pressable
                style={{
                  backgroundColor: "#2A344E",
                  padding: 20,
                  borderRadius: 20,
                  marginLeft: "auto",
                }}
              >
                <LogoutIcon />
              </Pressable>
            </View>
          </Column>
        </Header>

        <View style={{ flexGrow: 1 }}>
          <Column gap={10} style={{ padding: 20 }}>
            <Pressable onPress={() => {}} style={styles.listing}>
              <UserIcon />
              <CustomText size={2} style={{ color: "#2D2D2D" }}>
                Profile
              </CustomText>
              <View style={{ marginLeft: "auto" }}>
                <RightChevron />
              </View>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.listing}>
              <GoProIcon />
              <CustomText size={2} style={{ color: "#2D2D2D" }}>
                Go Pro
              </CustomText>
              <View style={{ marginLeft: "auto" }}>
                <RightChevron />
              </View>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.listing}>
              <TermsAndConditionsIcon />
              <CustomText size={2} style={{ color: "#2D2D2D" }}>
                Terms & Conditions
              </CustomText>
              <View style={{ marginLeft: "auto" }}>
                <RightChevron />
              </View>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.listing}>
              <FAQIcon />
              <CustomText size={2} style={{ color: "#2D2D2D" }}>
                FAQ
              </CustomText>
              <View style={{ marginLeft: "auto" }}>
                <RightChevron />
              </View>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.listing}>
              <SettingsIcon />
              <CustomText size={2} style={{ color: "#2D2D2D" }}>
                Settings
              </CustomText>
              <View style={{ marginLeft: "auto" }}>
                <RightChevron />
              </View>
            </Pressable>
          </Column>

          <Column
            gap={20}
            style={{
              marginTop: "auto",
              paddingBottom: 20,
              paddingHorizontal: 20,
            }}
          >
            <Button onPress={() => {}} backgroundColor="#081024">
              <HeadphonesIcon />
              <CustomText style={{ color: "white" }} size={1.5}>
                How can we help you?
              </CustomText>
            </Button>
            <CustomText
              size={0.5}
              style={{ textAlign: "center", color: "#A4A4A8" }}
            >
              Parking v.1
            </CustomText>
          </Column>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  listing: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
});
