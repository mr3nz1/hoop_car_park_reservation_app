import { Slot, SplashScreen, Stack, router } from "expo-router";
import UserProvider from "../store/user/UserContext";
import NavigationHeader from "../components/UI/NavigationHeader";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <UserProvider>
        <Stack
          screenOptions={{
            statusBarStyle: "auto",
            statusBarTranslucent: true,
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Auth/Register" options={{ headerShown: false }} />
          <Stack.Screen
            name="Auth/[loginType]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth/RequestCode"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth/ForgotPassword"
            options={{
              header: ({ navigation }) => {
                return (
                  <NavigationHeader
                    title="Forgot Password"
                    navigation={navigation}
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="Auth/OpenEmailScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth/RequestOtp"
            options={{
              header: ({ navigation }) => {
                return (
                  <NavigationHeader
                    title="OTP Verification"
                    navigation={navigation}
                  />
                );
              },
            }}
          />

          <Stack.Screen
            name="OnBoarding/OnBoarding"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack>
      </UserProvider>
      
      <Toast position="top" bottomOffset={20} />
    </>
  );
}
