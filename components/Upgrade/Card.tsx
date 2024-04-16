import { ListRenderItem, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import CustomText from "../UI/CustomText";
import { Checkbox } from "react-native-paper";
import CheckedItem from "./CheckItem";

interface CheckedItemType {
  card: {
    [key: string]: any;
    id: number;
    title: string;
    include: string;
    unlimited: string;
    discount: string;
  };
}

export default function Card({ card }: CheckedItemType) {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <CustomText style={{ textAlign: "center" }} size={3}>
            Pro
          </CustomText>

          <View>
            {Object.keys(card).map((item) => {
              console.log(item)
              if (item === "id") {
                return null;
              }
              return <CheckedItem key={item} title={card[item]} />;
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "#FFFF",
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "center",
    gap: 20,
  },
});
