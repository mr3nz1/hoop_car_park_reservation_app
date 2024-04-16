import { StyleSheet, View } from "react-native";
import { Checkbox } from "react-native-paper";
import CustomText from "../UI/CustomText";
import { useState } from "react";

interface CheckedItemType {
  title: string;
}

export default function CheckedItem({ title }: CheckedItemType) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
        color="#F43939"
      />
      <CustomText size={1.5} style={{ textAlign: "center", color: "#2D2D2D" }}>
        {title}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
