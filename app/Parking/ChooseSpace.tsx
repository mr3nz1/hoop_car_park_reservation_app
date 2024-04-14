import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../components/UI/CustomText";
import { useState } from "react";
import Column from "../../components/UI/Column";
import { DraxProvider, DraxView } from "react-native-drax";
import Space from "../../components/ChooseSpace/Space";

export default function ChooseSpace() {
  const [currentTag, setCurrentTag] = useState(1);
  const spaceCount = Array.from(Array(10), (_, i) => i + 1);

  return (
    <>
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Column
              gap={15}
              style={{
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 15,
                }}
              >
                {spaceCount.map((currentIndex) => {
                  return <Space key={currentIndex} />;
                })}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 15,
                }}
              >
                {spaceCount.map((currentIndex) => {
                  return <Space key={currentIndex} />;
                })}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 15,
                }}
              >
                {spaceCount.map((currentIndex) => {
                  return <Space key={currentIndex} />;
                })}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 15,
                }}
              >
                {spaceCount.map((currentIndex) => {
                  return <Space key={currentIndex} />;
                })}
              </View>
            </Column>
          </ScrollView>
        </ScrollView>
      </Column>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    paddingTop: 10,
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
