import { Pressable, StyleSheet, View } from "react-native";
import Column from "../Column";
import CustomText from "../CustomText";
import { RightChevron, UpChevron } from "../Icons/Icons";

interface AccordionItemType {
  title: string;
  children?: React.JSX.Element;
  isOpen?: boolean;
  index: number;
  onPress: () => void;
}

export default function AccordionItem({
  title,
  children,
  isOpen,
  index,
  onPress,
}: AccordionItemType) {
  return (
    <>
      <Column gap={4} style={styles.item}>
        <Pressable style={styles.itemHeader} onPress={onPress}>
          <CustomText size={2}>{title}</CustomText>
          {isOpen ? <UpChevron /> : <RightChevron />}
        </Pressable>
        <View>{isOpen && <View style={styles.itemBody}>{children}</View>}</View>
      </Column>
    </>
  );
}

const styles = StyleSheet.create({
  item: { backgroundColor: "white", padding: 20, borderRadius: 10 },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemBody: {},
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
  },
});
