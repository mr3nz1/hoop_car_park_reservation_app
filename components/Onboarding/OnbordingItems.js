import React from "react";
import { Dimensions, StyleSheet, Text, View,Image, useWindowDimensions } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import Icons from "../icons/icons";
import slides from "../slides";



export default function BoardingItems({item}) {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.greating}>{item.greating}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
flex :1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#EAEAF3'
  },
  title:{
    fontSize:30,
    padding:10
  },
  greating:{
    fontSize:20,
    padding:10,
    color:'#2D2D2D80'
  },
});
