import React, { useState, useRef, useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  FlatList,
  Animated,
  ScrollView,
} from "react-native";
import Button from "../../components/UI/Button";
import Item from "../../components/Onboarding/Item";
import slides from "../../slides";
import Paginator from "../../components/Onboarding/paginators";
import { Link, router } from "expo-router";
import CustomText from "../../components/UI/CustomText";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../store/user/UserContext";

export default function OnBoarding(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 30 }).current;

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Link href={"/Auth/email"} style={styles.skip}>
            <CustomText>Skip</CustomText>
          </Link>
        </View>

        <View>
          <FlatList
            data={slides}
            renderItem={({ item }) => <Item item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment="center"
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />

          <Paginator data={slides} scrollX={scrollX} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            backgroundColor="#2D2D2D"
            onPress={() => {
              router.push({
                pathname: "/Auth/[loginType]",
                params: { loginType: "email" },
              });
            }}
          >
            <Image source={require("../../assets/images/Message.png")} />

            <CustomText style={{ color: "white", marginLeft: 10 }}>
              Login With Email
            </CustomText>
          </Button>

          <Button
            backgroundColor="white"
            onPress={() => {
              router.push({
                pathname: "/Auth/[loginType]",
                params: { loginType: "phone" },
              });
            }}
          >
            <Image source={require("../../assets/images/Call.png")} />

            <CustomText style={{ color: "black", marginLeft: 10 }}>
              Login With Phone
            </CustomText>
          </Button>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CustomText>
              <CustomText style={{ textAlign: "center" }}>
                Don't have an account?{" "}
              </CustomText>
              <CustomText style={styles.sign}>
                <Link href={"/Auth/Register"}>Sign Up</Link>
              </CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAF3",
    paddingHorizontal: 20,
    paddingVertical: 40,
    height: "100%",
    justifyContent: "center",
    gap: 20,
  },
  skip: {
    textAlign: "right",
    color: "#8B8B90",
  },
  buttonsContainer: {
    gap: 20,
  },
  sign: {
    color: "#F43939",
  },
  upin: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#F43939",
  },
});
