import { Stack } from "expo-router";
import NavigationHeader from "../components/UI/NavigationHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Register" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Login" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/RequestCode" options={{ headerShown: false }} />
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
    </Stack>
  );
}
