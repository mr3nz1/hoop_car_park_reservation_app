import { Pressable, View } from "react-native";
import CustomText from "../UI/CustomText";

interface NotificationItemType {
  read?: boolean;
}

export default function NotificationItem({ read }: NotificationItemType) {
  return (
    <>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          backgroundColor: "white",
          padding: 15,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            height: 45,
            width: 3,
            backgroundColor: "#F43939",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            opacity: read ? 0.2 : 1,
          }}
        ></View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText
              size={1.5}
              style={{ color: read ? "#969696" : "black" }}
            >
              Order Successful
            </CustomText>
            <CustomText size={0.5} style={{ color: "#C0C0C0" }}>
              12:34
            </CustomText>
          </View>
          <CustomText style={{ color: "#969696" }}>
            Congrats on your reserved parking space...
          </CustomText>
        </View>
      </Pressable>
    </>
  );
}
