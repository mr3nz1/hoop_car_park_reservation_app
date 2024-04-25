import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../../components/UI/CustomText";
import { useState } from "react";
import Column from "../../../components/UI/Column";
import { DraxProvider, DraxView } from "react-native-drax";
import Space from "../../../components/ChooseSpace/Space";
import Button from "../../../components/UI/Button";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ChooseSpace() {
  const [currentTag, setCurrentTag] = useState(1);
  const spaceCount = Array.from(Array(10), (_, i) => i + 1);

  return (
    <>
      <StatusBar style="dark" />
      <Column gap={30} style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsContainer}
        >
          <Pressable
            onPress={() => setCurrentTag(1)}
            style={currentTag === 1 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 1 ? { color: "white" } : {}}>
              1st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(3)}
            style={currentTag === 3 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 3 ? { color: "white" } : {}}>
              3st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(3)}
            style={currentTag === 3 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 3 ? { color: "white" } : {}}>
              3st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(4)}
            style={currentTag === 4 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 4 ? { color: "white" } : {}}>
              4st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(5)}
            style={currentTag === 5 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 5 ? { color: "white" } : {}}>
              5st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(6)}
            style={currentTag === 6 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 6 ? { color: "white" } : {}}>
              6st Floor
            </CustomText>
          </Pressable>
          <Pressable
            onPress={() => setCurrentTag(7)}
            style={currentTag === 7 ? styles.tagActive : styles.tag}
          >
            <CustomText style={currentTag === 7 ? { color: "white" } : {}}>
              7st Floor
            </CustomText>
          </Pressable>
        </ScrollView>

        <ScrollView style={{ flexGrow: 1, padding: 20 }}>
          <View style={{ flexDirection: "row", gap: 30 }}>
            {/* <Space /> */}
            {/* <View
              style={{ height: 180, width: 1, backgroundColor: "red" }}
            ></View>
          <Space /> */}
            <Image source={require("../../../assets/images/chooseParking.png")} />
          </View>
        </ScrollView>

        <View style={{ paddingHorizontal: 30, marginTop: "auto" }}>
          <Button
            backgroundColor="#130F26"
            onPress={() => {
              router.push("/Parking/Booking");
            }}
          >
            <CustomText size={1.5} style={{ color: "white" }}>
              Book Space
            </CustomText>
          </Button>
        </View>
      </Column>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    paddingTop: 10,
    paddingBottom: 20
  },
  tagsContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    gap: 10,
  },
  tagActive: {
    backgroundColor: "#F43939",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  tag: {
    backgroundColor: "#EAEAF3",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
