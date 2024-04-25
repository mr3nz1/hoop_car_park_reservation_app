import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import NavigationHeader from "../../../components/UI/NavigationHeader";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../../../components/UI/CustomText";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import Button from "../../../components/UI/Button";
import Column from "../../../components/UI/Column";
import Option from "../../../components/PlanPayment/Option";

export default function PlanPayment() {
  const [subscription, setsubscription] = useState("y");

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ height: "100%" }}
      >
        <Column
          gap={1}
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <View style={{}}>
            <Image source={require("../../../assets/images/payment.png")} />
          </View>

          <Column
            gap={10}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Option
              subscription={subscription}
              setsubscription={setsubscription}
              duration="y"
              price="$210"
              description="Pay for a full year"
            />
            <Option
              subscription={subscription}
              setsubscription={setsubscription}
              duration="m"
              price="$20"
              description="Pay monthly, cancel anytime"
            />
          </Column>
        </Column>
        <View
          style={{
            flexDirection: "row",
            marginTop: "auto",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Button
            backgroundColor="#130F26"
            onPress={() => {}}
            style={{ width: "100%" }}
          >
            <CustomText style={{ color: "white" }}>Make Payment</CustomText>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
    // paddingVertical: 30,
    height: "100%",
  },
});
