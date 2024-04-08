import React from "react";
import { Dimensions, StyleSheet, Text, View,Image, useWindowDimensions } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import slides from "../slides";



export default function BoardingItems({item}:any) {
    const { width,height } = Dimensions.get(`screen`);

    return (
        <View style={[styles.container, {width, height}]}>
          <View style= {styles.image}>
          <Image source={item.image} style={styles.imag}/>
          </View>
          <View style = {styles.content}>
          <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.greating}>{item.greating}</Text>
          </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
  container:{

alignItems:'center',
backgroundColor:'#EAEAF3',
padding: 10,

  },
  title:{
    fontSize:30,
    
    textAlign:'center'
  },
  greating:{
    fontSize:20,
   paddingBottom:110,
    textAlign:'center',
    color:'#2D2D2D80'
  },
  image:{
width:'100%',
height:30,
flex:0.6,
alignItems:'center'
  },
  imag:{

  },
  content:{
  
  },
  skip:{
textAlign: 'right'
  }
});
