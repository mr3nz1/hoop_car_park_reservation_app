import { Stack } from "expo-router";
import NavigationHeader from "../components/UI/NavigationHeader";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: NavigationHeader,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Register" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Login" options={{ headerShown: false }} />
    </Stack>
  );
}
