import NotificationItem from "../../components/Notifications/Item";
import Column from "../../components/UI/Column";
import CustomText from "../../components/UI/CustomText";
import { ScrollView, Pressable, View, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Column gap={10} style={{ marginTop: 20 }}>
        <CustomText size={2}>Today</CustomText>
        <Column gap={15}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem read={true} />
        </Column>
      </Column>
      <Column gap={10} style={{ marginTop: 20 }}>
        <CustomText size={2}>June 12, 2021</CustomText>
        <Column gap={15}>
          <NotificationItem />
          <NotificationItem read={true} />
        </Column>
      </Column>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4FA",
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
});
