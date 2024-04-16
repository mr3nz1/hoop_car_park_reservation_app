import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import CustomText from "../UI/CustomText";
import { useEffect, useState } from "react";
import Column from "../UI/Column";

interface OptionType {
  duration: string;
  description: string;
  price: string;
  subscription: string;
  setsubscription: (val: string) => string;
}

export default function Option({
  subscription,
  setsubscription,
  duration,
  description,
  price,
}: OptionType) {
  const [checked, setChecked] = useState(
    subscription === duration ? true : false
  );
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      backgroundColor: !checked ? "white" : "#EAEAF3",
      padding: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: !checked ? "#F43939" : "white",
    },
  });

  function handlerPress() {
    setsubscription(duration);
  }

  useEffect(() => {
    setChecked((prevVal) => !prevVal);
  }, [subscription]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <RadioButton
          value={duration}
          status={!checked ? "checked" : "unchecked"}
          onPress={handlerPress}
          color="#F43939"
        />

        <Column gap={8} style={{}}>
          <CustomText size={2}>
            {duration === "m" ? "Monthly" : "Yearly"}
          </CustomText>
          <CustomText style={{ color: "#969696" }}>{description}</CustomText>
        </Column>
      </View>

      <View style={{}}>
        <CustomText style={{ color: !checked ? "#F43939" : "#2D2D2D" }}>
          <CustomText size={2}>{price}</CustomText>
          <CustomText>/{duration === "m" ? "m" : "y"}</CustomText>
        </CustomText>
      </View>
    </View>
  );
}
