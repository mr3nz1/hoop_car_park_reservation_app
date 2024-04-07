import { Image, Pressable, StyleSheet, View } from "react-native";

interface ParkingImageShowcase {
  showLocationBtn?: boolean;
}

export default function ParkingImageShowcase({
  showLocationBtn,
}: ParkingImageShowcase) {
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 30,
    // paddingVertical: 30,
  },
  image: {},
  button: {
    backgroundColor: "#F43939",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    marginBottom: -20,
  },
});
