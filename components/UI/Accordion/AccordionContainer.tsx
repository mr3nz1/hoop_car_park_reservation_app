import { Image, StyleSheet, View } from "react-native";
import Column from "../Column";
import CustomText from "../CustomText";
import { Add, RightChevron } from "../Icons/Icons";
import { Field, Formik, useFormik } from "formik";
import { RadioButton, TextInput } from "react-native-paper";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import Input from "../Input";

export default function AccordionContainer() {
  const [paymentMethod, setPaymentMethod] = useState("ABC Bank **** 6189");
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      <Column gap={20} style={styles.container}>
        <AccordionItem
          title="Mobile Banking"
          isOpen={openItem === 0}
          index={0}
          onPress={() => {
            return setOpenItem(0);
          }}
        >
          <View style={styles.itemBody}>
            <CustomText style={styles.gray}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              laborum, consequuntur explicabo eum neque obcaecati repudiandae
              quibusdam, excepturi, tempore et velit nihil! Ducimus aspernatur
              totam unde tempore nihil saepe iste!
            </CustomText>
          </View>
        </AccordionItem>

        <AccordionItem
          title="Credit Card"
          isOpen={openItem === 1}
          index={0}
          onPress={() => {
            return setOpenItem(1);
          }}
        >
          <View style={[styles.itemBody, {marginTop: 10}]}>
            <Column gap={20}>
              <Formik
                initialValues={{ paymentMethod: "" }}
                onSubmit={({ paymentMethod }) => {}}
              >
                <RadioButton.Group
                  onValueChange={(value) => {
                    setPaymentMethod(value);
                  }}
                  value={paymentMethod}
                >
                  <Column gap={8}>
                    <View style={styles.paymentCardContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 8,
                        }}
                      >
                        <Image
                          source={require("../../../assets/images/Components   Sprint 3.png")}
                        />
                        <CustomText>ABC Bank **** 6189</CustomText>
                      </View>
                      <RadioButton
                        value={"ABC Bank **** 6189"}
                        color="#F43939"
                        uncheckedColor="#f4f4f4"
                        status={
                          paymentMethod === "ABC Bank **** 6189"
                            ? "checked"
                            : "unchecked"
                        }
                      />
                    </View>
                    <View style={styles.paymentCardContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 8,
                        }}
                      >
                        <Image
                          source={require("../../../assets/images/Visa Inc. Logo.png")}
                        />
                        <CustomText>ABC Bank **** 498</CustomText>
                      </View>
                      <RadioButton
                        value="ABC Bank **** 4908"
                        uncheckedColor="#f4f4f4"
                        color="#F43939"
                        status={
                          paymentMethod === "ABC Bank **** 4908"
                            ? "checked"
                            : "unchecked"
                        }
                      />
                    </View>
                  </Column>
                </RadioButton.Group>
              </Formik>

              <Input placeholder="Add new card" btnLeft={<Add />} />
            </Column>
          </View>
        </AccordionItem>

        <AccordionItem
          title="Google Play"
          isOpen={openItem === 2}
          index={0}
          onPress={() => {
            return setOpenItem(2);
          }}
        >
          <View style={styles.itemBody}>
            <CustomText style={styles.gray}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              laborum, consequuntur explicabo eum neque obcaecati repudiandae
              quibusdam, excepturi, tempore et velit nihil! Ducimus aspernatur
              totam unde tempore nihil saepe iste!
            </CustomText>
          </View>
        </AccordionItem>

        <AccordionItem
          title="Debit Card"
          isOpen={openItem === 3}
          index={0}
          onPress={() => {
            return setOpenItem(3);
          }}
        >
          <View style={styles.itemBody}>
            <CustomText style={styles.gray}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              laborum, consequuntur explicabo eum neque obcaecati repudiandae
              quibusdam, excepturi, tempore et velit nihil! Ducimus aspernatur
              totam unde tempore nihil saepe iste!
            </CustomText>
          </View>
        </AccordionItem>
      </Column>
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 60 },
  gray: { color: "#919193" },
  red: { color: "#F43939" },
  textCenter: {
    textAlign: "center",
  },
  item: { backgroundColor: "white", padding: 20, borderRadius: 20 },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemBody: {},
  paymentCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 10,
  },
});
