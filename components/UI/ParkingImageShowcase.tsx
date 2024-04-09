import { Image, Pressable, StyleSheet, View } from "react-native";

interface ParkingImageShowcase {
  showLocationBtn?: boolean;
  variant?: boolean;
}

export default function ParkingImageShowcase({
  showLocationBtn,
  variant,
}: ParkingImageShowcase) {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      position: "relative",
      paddingHorizontal: 30,
    },
    image: variant
      ? {
          height: 150,
          borderRadius: 20,
          marginHorizontal: 40,
        }
      : {},
    button: {
      backgroundColor: "#F43939",
      padding: 10,
      borderRadius: 50,
      position: "absolute",
      bottom: 0,
      marginBottom: -20,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/detail_image.png")}
        />
        {showLocationBtn && (
          <Pressable style={styles.button}>
            <Image source={require("../../assets/images/location_icon.png")} />
          </Pressable>
        )}
      </View>
    </>
  );
}
