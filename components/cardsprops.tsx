import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, FlatList, Animated } from "react-native";


import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import cards from "./cards";
import HomeScreen from "./screens/screen";



export default function Boarding(props: any) {
    const { width } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 30 }).current;

    return (
      <>
      <View style={styles.container}>
           </View>
      <View style = {styles.cardcontainer}>
        <View style ={styles.cards}>
<View style={styles.imagex}>
<Image 
source={require(`../assets/images/Asset.png`)}
style={{width:100, height:100, objectFit:'cover', borderRadius:30 }}
/>
</View>
<View>
  <Text>Graha Mall</Text>
  <Text>123 Dhaka Street</Text>
  <Text>$7/hour</Text>
</View>
       
      </View>
        </View>
      
      </>
        
    );
}

const styles = StyleSheet.create({
  cardcontainer:{
    flex:1,
backgroundColor:'#F4F4FA',
flexDirection:'row',
padding:10
   },
   container:{

   },
   cards:{
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    padding:10
   },
   skip:{

   },
   imagex:{
  
   },

});
