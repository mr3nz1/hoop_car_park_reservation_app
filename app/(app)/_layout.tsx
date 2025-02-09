import { SplashScreen, Stack, router } from "expo-router";
import NavigationHeader from "../../components/UI/NavigationHeader";
import { Pressable } from "react-native";
import { Filter } from "../../components/UI/Icons/Icons";
import UserProvider, { UserContext } from "../../store/user/UserContext";
import { useFonts } from "expo-font";
import { useCallback, useContext, useState } from "react";

export default function RootLayout() {
  const { email, name, sessionId } = useContext(UserContext);
  const isLoggedIn = email !== "" && name !== "" && sessionId !== "";

  if (!isLoggedIn) {
    return router.push("/OnBoarding/OnBoarding");
  }

  return (
    <Stack
      screenOptions={{ statusBarStyle: "auto", statusBarTranslucent: true }}
    >
      <Stack.Screen
        name="Parking/[ParkingDetails]"
        options={{
          header: ({ navigation }) => {
            return <NavigationHeader title="Details" navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Parking/BookDetails"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader title="Book Details" navigation={navigation} />
            );
          },
        }}
      />
      <Stack.Screen
        name="Payment/Payment"
        options={{
          header: ({ navigation }) => {
            return <NavigationHeader title="Payment" navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Payment/PaymentDetails"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader
                title="Payment Details"
                navigation={navigation}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Payment/PaymentSuccess"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Parking/TrackingPark"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader
                title="Tracking Park"
                navigation={navigation}
                absolute={true}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Parking/ChooseSpace"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader title="Choose Space" navigation={navigation} />
            );
          },
        }}
      />
      <Stack.Screen
        name="Parking/Booking"
        options={{
          header: ({ navigation }) => {
            return <NavigationHeader title="Booking" navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Parking/ParkingRoute"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Parking/HomeScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Parking/Explore/[Explore]"
        options={{
          header: ({ navigation }) => {
            return <NavigationHeader title="Explore" navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Parking/History"
        options={{
          header: ({ navigation }) => {
            return <NavigationHeader title="History" navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Parking/DetailHistory"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader
                title="Detail History"
                navigation={navigation}
              />
            );
          },
        }}
      />

      <Stack.Screen
        name="Parking/DetailCategory"
        options={{
          header: ({ navigation }) => {
            return (
              <NavigationHeader
                title="Detail Category"
                navigation={navigation}
                rightBtn={
                  <Pressable
                    style={{
                      backgroundColor: "#EAEAF3",
                      padding: 15,
                      borderRadius: 15,
                    }}
                  >
                    <Filter />
                  </Pressable>
                }
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Parking/ShowMaps"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Options/Profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Options/Notifications"
        options={{
          header: ({ navigation }) => (
            <NavigationHeader title="Notification" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Options/EditProfile"
        options={{
          header: ({ navigation }) => (
            <NavigationHeader title="Notification" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Options/Upgrade"
        options={{
          header: ({ navigation }) => (
            <NavigationHeader title="Upgrade" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Options/PlanPayment"
        options={{
          header: ({ navigation }) => (
            <NavigationHeader title="Upgrade" navigation={navigation} />
          ),
        }}
      />
    </Stack>
  );
}
