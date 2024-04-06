import React from "react";
import { Dimensions, StyleSheet, Text, View,Image, useWindowDimensions,Animated } from "react-native";
import slides from "../slides.js";



export default function Paginator({data, scrollX}: any, ) {

const {width} = useWindowDimensions()
    return (
        <>
        <View style={{flexDirection:'row', height:64, justifyContent:'center' , backgroundColor:'#EAEAF3'}}>
        {data.map((_:any, i:any)=>{
            const inputRange = [(i -1) * width, i * width, (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp', 
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.1, 1, 0.3],
                extrapolate: 'clamp', 
            });

return <Animated.View style={[styles.dot, {width:dotWidth,opacity}, {justifyContent:'center'}]} key={i.toString()}/>
        })}
        </View>
        
        </>
    );
}

const styles = StyleSheet.create({
  dot:{
height:10,
borderRadius:5,
backgroundColor:'red',
marginHorizontal:4,
textAlign:'center'

  }
});
