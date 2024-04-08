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
{/* <Image 
source={require(props.image)}
style={{width:100, height:100, objectFit:'cover', borderRadius:30 }}
/> */}
</View>

<View style={styles.card}>
  <View>
  <Text style={styles.head}>{props.head}</Text>
  <Text style={styles.hello}>{props.hello}</Text>
  <Text style={styles.money}>{props.dollar}<Text style={styles.hr}>{props.hr}</Text></Text>
  </View>

  <View>
    <Text style={styles.min}>{props.time}</Text>
  </View>
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
flexDirection:'column',
padding:20,
gap:30,
position:'relative',



   },
   head:{
color:'#2D2D2D',
fontSize:18,
fontWeight:'400'
   },
   hello:{
color:'#2D2D2D80',
fontSize:14
   },
   money:{
position:'absolute',
bottom:0,
fontSize:20,
fontWeight:'900',
color:'#F43939'
   },
   hr:{
    fontWeight:'300',
    fontSize:15

   },
   container:{

   },
   cards:{
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    padding:15,
    // flex:1,
    height:100,
    borderRadius:20,
    width:'100%',
    gap: 20

   },
   card:{
    flexDirection:'row',
    flex: 1, 
    // marginHorizontal:2,
    gap:44,
    
   },
   newst:{
fontSize:20,
fontWeight:'500'
   },
   min:{
    backgroundColor:'#FFF3F3',
    padding:5,
    borderRadius:50,
    color:'#F43939'
   },
   skip:{

   },
   imagex:{
  
   },

});
