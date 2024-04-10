import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, FlatList, Animated, SafeAreaView, ScrollView } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct
import OnboardingItems from '../Onboarding/OnbordingItems';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import slides from "../slides";
import MyLink from "../links/links";
import Paginator from "./paginators";
import { Link } from "expo-router";
import CustomText from "../UI/CustomText";

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
        <SafeAreaView style={{padding:20, backgroundColor:'#EAEAF3'}}>
            <View style = {styles.container}>
            <ScrollView contentContainerStyle={{width:'100%', height:'100%'}}>
                <Link href={'/HomeScreen'}style = {styles.skip}>Skip</Link>
                
            <FlatList
               
                data={slides}
                renderItem={({ item }) => (
                    <OnboardingItems item={item} width={width} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false } 
                )}
                scrollEventThrottle={16}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
           
            <Paginator data={slides} scrollX={scrollX} />
          
            
             <View style={styles.pages}>
             <Button
                            backgroundColor="#2D2D2D"
                            onPress={() => {
                                // Handle button press
                            }}
                            
                        >
                            <Image source={require("../../assets/images/Message.png")} />


                            <CustomText style={{ color: 'white', marginLeft: 10 }}>Login With Email</CustomText>
                        </Button>

                        <Button
                            backgroundColor="white"
                            onPress={() => {

                            }}

                            // style={styles.button}
                        >
                            <Image source={require("../../assets/images/Call.png")} />

                            <CustomText style={{ color: 'black', marginLeft: 10 }}>Login With Phone</CustomText>
                           
                        </Button>
                      
                        <View style={styles.upin}>
                        <CustomText style={{textAlign:'center'}}>DON'T HAVE ACCOUNT ? </CustomText>
                        <Link href={'/Explore'} style={styles.sign}>Sign Up</Link>
                        </View>
                        
                        </View>
            </ScrollView>
            
           </View>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'#EAEAF3',
    gap:39
},
skip: {
    textAlign: 'right',
    fontSize: 18,
    // padding: (30, 10),
    fontWeight: '300'
},
pages: {
    flex:0.6,
    gap:20
},
sign:{
   fontSize:18,
    color:'#F43939',
  
},
upin:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
gap:10,
    height:5,
    color:'#F43939',
  
}


   
});
