import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";

interface BoardingProps {
  head: string;
  hello: string;
  dollar?: string;
  hr: string;
  time: string;
}

export default function Boarding(props: React.PropsWithChildren<BoardingProps>) {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.cardcontainer}>
      <View style={styles.cards}>
        <View style={styles.imagex}>
          {props.children}
        </View>

        <View style={styles.card}>
          <View style={styles.word}>
            <View>
              <CustomText style={styles.head}>{props.head}</CustomText>
              <CustomText style={styles.hello}>{props.hello}</CustomText>
            </View>
            <View>
              <Text style={styles.money}>
                {props.dollar}<CustomText style={styles.hr}>{props.hr}</CustomText>
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.min}>{props.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardcontainer: {
    flexDirection: 'column',
    padding: 20,
    gap: 10,
    position: 'relative',
  },
  imagex: {
    // Optional styles for the imagex container
  },
  head: {
    color: '#2D2D2D',
    fontSize: 18,
    fontWeight: '400',
  },
  hello: {
    color: '#2D2D2D80',
    fontSize: 14,
  },
  money: {
    position: 'absolute',
    bottom: 0,
    fontSize: 20,
    fontWeight: '900',
    color: '#F43939',
  },
  hr: {
    fontWeight: '300',
    fontSize: 15,
  },
  cards: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    flex: 1,
    gap: 44,
  },
  min: {
    backgroundColor: '#FFF3F3',
    padding: 5,
    borderRadius: 50,
    color: '#F43939',
  },
  word: {
    flex: 1,
    gap: 50
  }
});
