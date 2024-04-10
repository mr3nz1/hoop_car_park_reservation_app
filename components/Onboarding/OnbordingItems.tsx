import React from "react";
import { Dimensions, StyleSheet, Text, View,Image, useWindowDimensions } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import slides from "../slides";
import CustomText from "../UI/CustomText";


export default function BoardingItems({item}:any) {
    const { width } = Dimensions.get(`screen`);

    return (
        <View style={[styles.container, {width}]}>
          <View style= {styles.image}>
          <Image source={item.image} style={styles.imag}/>
          </View>
          <View style = {styles.content}>
          <CustomText style={styles.title}>{item.title}</CustomText>
            <CustomText style={styles.greating}>{item.greating}</CustomText>
          </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
flex:1,
alignItems:'center',
// backgroundColor:'red',
padding: 30,


  },
  title:{
    fontSize:30,
    
    textAlign:'center'
  },
  greating:{
    fontSize:20,
  //  paddingBottom:110,
    textAlign:'center',
    color:'#2D2D2D80'
  },
  image:{
width:'100%',

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
