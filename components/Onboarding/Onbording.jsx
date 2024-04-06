import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, FlatList, Animated } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import OnbordingItems from '../Onboarding/OnbordingItems';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome/dist/components/FontAwesomeIcon";
import slides from "../slides";
import MyLink from "../links/links";
import Paginator from "./paginators";
import image1 from '../../assets/images/Message.png'

export default function Boarding(props) {
    const { width } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 30 }).current;

    return (
        
        <>
         <View style={styles.flat} >
            <Text style={styles.skip}>Skip</Text>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnbordingItems item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                 
                )}
                scrollEventThrottle={16}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator data = {slides} scrollX={scrollX}/>
           
        
            <View style={[styles.cardcontainer, { width }]}>
           
        

           <View style={styles.pages}>
               <Button
                   backgroundColor="#2D2D2D"
                   onPress={() => {
                       // Handle button press
                   }}
                   style={styles.button}
               >
                <Image source={require("../../assets/images/Message.png")} />

               
                   <Text style={{ color: 'white', marginLeft: 10 }}>Login With Email</Text>
               </Button>

               <Button
                   backgroundColor="white"
                   onPress={() => {
                       
                   }}
                   style={styles.button}
               >
                  <Image source={require("../../assets/images/Call.png")}/>
                   <Text style={{ color: 'black', marginLeft: 10 }}>Login With Phone</Text>
               </Button>
               <Text style={styles.bottom}>DON'T HAVE ACCOUNT ?<Text style={styles.sign}>SIGN UP</Text></Text>
           </View>
       </View>
       </View>
        </>
    );
}

const styles = StyleSheet.create({
    pages: {
        justifyContent: 'center',
        alignItems: 'center',
       gap:10,
    
    },
    cardcontainer: {
        backgroundColor: '#EAEAF3',
        padding: 10,
        lineHeight: 20
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
    para: {
        fontWeight: 'light',
        color: '#aaa'
    },
    head: {
        flex: 0.3,
        fontSize: 20,
        textAlign: 'right',
        padding: 10,
        textTransform: 'capitalize',
        fontWeight: '300'
    },
    link: {
        color: '#F43939'
    },
    flat:{
        backgroundColor: '#EAEAF3',
        flex:3,
        
    },
    skip:{
textAlign:'right',
fontSize:18,
padding:(30 , 10),
fontWeight:'300'
    },
    sign:{
color:'#F43939' ,
    },
   bottom:{
gap:20
   }
});
