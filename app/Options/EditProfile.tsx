import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { PenEdit } from "../../components/UI/Icons/Icons";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

export default function EditProfile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Column
        gap={20}
        style={{
          marginTop: 20,
          flex: 1,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ borderRadius: 100, position: "relative" }}>
            <Image source={require("../../assets/images/Ellipse 19.png")} />
            <Pressable
              style={{
                backgroundColor: "#F43939",
                position: "absolute",
                bottom: -4,
                right: -4,
                borderRadius: 100,
                padding: 4,
                borderWidth: 2,
                borderColor: "#F4F4F4",
              }}
            >
              <PenEdit width="13" height="13" />
            </Pressable>
          </View>
        </View>

        <Column gap={20}>
          <Column gap={10}>
            <CustomText style={{ color: "#919193" }}>Name</CustomText>
            <Input placeholder="Echa" placeholderTextColor="#2D2D2D" />
          </Column>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <Column gap={10} style={{ flex: 0.5 }}>
              <CustomText style={{ color: "#919193" }}>Type</CustomText>
              <Input placeholder="Car Sport" placeholderTextColor="#2D2D2D" />
            </Column>
            <Column gap={10} style={{ flex: 0.5 }}>
              <CustomText style={{ color: "#919193" }}>ID</CustomText>
              <Input placeholder="C68Z721" placeholderTextColor="#2D2D2D" />
            </Column>
          </View>
          <Column gap={10}>
            <CustomText style={{ color: "#919193" }}>Address</CustomText>
            <Input placeholder="Address" placeholderTextColor="#2D2D2D" />
          </Column>
        </Column>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            marginTop: "auto",
          }}
        >
          <Button
            onPress={() => {}}
            backgroundColor="#EAEAF3"
            style={{ flex: 0.5 }}
          >
            <CustomText size={1.5} style={{ color: "#8B8B90" }}>
              Cancel
            </CustomText>
          </Button>
          <Button
            onPress={() => {}}
            backgroundColor="#130F26"
            style={{ flex: 0.5 }}
          >
            <CustomText size={1.5} style={{ color: "white" }}>
              Save
            </CustomText>
          </Button>
        </View>
      </Column>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    paddingBottom: 30,
    paddingHorizontal: 30,
    height: "100%",
  },
});
