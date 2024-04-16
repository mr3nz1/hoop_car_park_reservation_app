import { ScrollView, StyleSheet, Switch, View } from "react-native";
import AccordionContainer from "../../components/UI/Accordion/AccordionContainer";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import { useState } from "react";
import Button from "../../components/UI/Button";
import { Link, router } from "expo-router";
import { EmailIcon } from "../../components/UI/Icons/Icons";

export default function PaymentDetails() {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <AccordionContainer />
        <Column
          gap={0}
          style={{
            paddingBottom: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText>Send receipt to your email</CustomText>
            <Switch
              trackColor={{ false: "#F43939", true: "#F43939" }}
              thumbColor={"white"}
              value={isSwitchEnabled}
              onValueChange={() => {
                setIsSwitchEnabled((prevVal) => !prevVal);
              }}
            />
          </View>

          <Button
            backgroundColor="#130F26"
            onPress={() => {
              router.push("/Payment/PaymentSuccess");
            }}
          >
            <CustomText size={1.5} style={{ color: "white" }}>
              Pay Now
            </CustomText>
          </Button>
        </Column>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#f4f4f4",
  },
});
