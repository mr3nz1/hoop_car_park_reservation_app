import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import data from "../../../data";
import CustomText from "../../../components/UI/CustomText";
import { useState } from "react";
import Button from "../../../components/UI/Button";
import Column from "../../../components/UI/Column";
import Card from "../../../components/Upgrade/Card";
import { router } from "expo-router";

export default function Upgrade() {
  const { width: ScreenWidth } = Dimensions.get("window");
  const sliderWidth = ScreenWidth;
  const items = sliderWidth * 0.8;

  return (
    <>
      <ScrollView
        style={[styles.container, { height: "100%" }]}
        contentContainerStyle={{ height: "100%" }}
      >
        <Column gap={30} style={{ flex: 1, height: "100%" }}>
          <Column gap={30} style={{ flexGrow: 1 }}>
            <View style={{ alignItems: "center" }}>
              <CustomText size={4} style={{ width: 350, textAlign: "center" }}>
                Get all the facilities by upgrading your account
              </CustomText>
            </View>
            <FlatList
              data={data}
              renderItem={(card) => {
                return <Card card={card.item} />;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToAlignment="center"
              bounces={false}
              keyExtractor={(item) => item.id.toString()}
            />
          </Column>
          <View
            style={[styles.buttoncontainer, { flexGrow: 1, marginTop: "auto" }]}
          >
            <Button
              backgroundColor="white"
              onPress={() => {
                router.push("/Options/PlanPayment")
              }}
              style={styles.button}
            >
              <CustomText style={{ color: "#FFFF", marginLeft: 10 }}>
                Choose a Plan
              </CustomText>
            </Button>
          </View>
        </Column>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  itemScrollViewContainer: {
    paddingHorizontal: 50,
  },
  itemContainer: {
    borderRadius: 20,
    backgroundColor: "#FFFF",
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "center",
    gap: 20,
  },
  itemDescription: {
    fontSize: 16,
  },
  topHead: {
    fontSize: 24,
    textAlign: "center",
    padding: 14,
  },
  buttoncontainer: {
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#130F26",
    color: "#FFFF",
  },
});
