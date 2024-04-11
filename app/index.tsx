import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/UI/CustomText";
import { useFonts } from "expo-font";

export default function SplashScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "Avenir-Black": require("../assets/fonts/Avenir/Avenir-Black.ttf"),
    "Avenir-Light": require("../assets/fonts/Avenir/Avenir-Light.ttf"),
    "Avenir-Medium": require("../assets/fonts/Avenir/Avenir-Medium.ttf"),
    "Avenir-Heavy": require("../assets/fonts/Avenir/Avenir-Heavy.ttf"),
  });

  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Animated.timing(fade, { toValue: 1, useNativeDriver: true }).start();
    // Animated.timing(scale, { toValue: 1.4, useNativeDriver: true }).start();

    // Animated.timing(fade, { toValue: 1, useNativeDriver: true }).stop();
    // Animated.timing(scale, { toValue: 1.4, useNativeDriver: true }).stop();


    setTimeout(() => {
      if (fontsLoaded || fontError) {
        router.push("/Onboarding")
      }
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Animated.Image
          style={{ opacity: fade, transform: [{ scale: scale }] }}
          source={require("../assets/images/splash_logo.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAF3",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    backgroundColor: "#F43939",
    fontSize: 50,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
  },
});

// import { useEffect, useRef } from "react";
// import { Animated, StyleSheet, View } from "react-native";

// export default function Index() {
//   const progress = useRef(new Animated.Value(0.5)).current;
//   const scale = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.parallel([
//         Animated.sequence([
//           Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
//           Animated.spring(progress, {
//             toValue: 0.5,
//             useNativeDriver: true,
//           }),
//         ]),

//         Animated.sequence([
//           Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
//           Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
//         ]),
//       ])
//     ).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.square,
//           {
//             borderRadius: progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [100 / 4, 100 / 2],
//             }),
//             opacity: progress,
//             transform: [
//               { scale },
//               {
//                 rotate: progress.interpolate({
//                   inputRange: [0.5, 1],
//                   outputRange: [`${Math.PI}rad`, `${2 * Math.PI}rad`],
//                 }),
//               },
//             ],
//           },
//         ]}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   square: {
//     width: 100,
//     height: 100,
//     backgroundColor: "rgba(0,0,256,0.5)",
//   },
// });
