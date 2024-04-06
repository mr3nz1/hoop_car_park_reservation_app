import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, FlatList, Animated } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import OnbordingItems from '../Onboarding/OnbordingItems';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import slides from "../slides";
import Paginator from "./paginators";

export default function Boarding(props) {
    const { width } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

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
            </View>
        
            <View style={[styles.cardcontainer, { width }]}>
           
        

           <View style={styles.pages}>
               <Button
                   backgroundColor="#2D2D2D"
                   onPress={() => {
                       // Handle button press
                   }}
                   style={styles.button}
               >
               
                   <Text style={{ color: 'white', marginLeft: 10 }}>Login With Email</Text>
               </Button>

               <Button
                   backgroundColor="white"
                   onPress={() => {
                       
                   }}
                   style={styles.button}
               >
                  
                   <Text style={{ color: 'black', marginLeft: 10 }}>Login With Phone</Text>
               </Button>
               <Text>DON'T HAVE ACCOUNT ?SIGN UP</Text>
           </View>
       </View>
        </>
    );
}

const styles = StyleSheet.create({
    pages: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
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
        flex:1
    },
    skip:{
textAlign:'right',

padding:(20, 10),
fontSize:18,
fontWeight:'300'
    }
   
});
