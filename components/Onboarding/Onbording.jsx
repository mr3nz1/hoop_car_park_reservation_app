import React from "react";
import { Dimensions, StyleSheet, Text, View,Image } from "react-native";
import Button from '../UI/Button'; // Assuming the path is correct

export default function Boarding(props) {
    const { width } = Dimensions.get('window');

    return (
        <View style={[styles.cardcontainer, { width }]}>
            <Text style={styles.head}>skip</Text>
            <Image source={require('../../assets/images/Asset.png')}/>
            <View style={styles.pages}>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.para}>Find a best possible way to park</Text>
            <View style={styles.sliding}>
            <Text style={styles.slider}>a</Text>
         <Text style={styles.slide}>a</Text>
         <Text style={styles.slid}>a</Text>
            </View>
      
                <Button
                    backgroundColor="#2D2D2D" 
                    onPress={() => {
                        // Handle button press
                    }}
                    style={styles.button}
                >
                    <Text style={{ color: 'white' }}>Login With Email</Text>
                </Button>

                <Button
                    backgroundColor="white" 
                    onPress={() => {
                        // Handle button press
                    }}
                    style={styles.button}
                >
                    <Text style={{ color: 'black' }}>Login With phone</Text>
                </Button>

                <Text style={styles.bottom}>Don't have an account?<Text style={styles.link}>Signup</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pages: {
        justifyContent:'center',
    alignItems:'center',
gap:20
    },
    cardcontainer: {
        backgroundColor: '#ddd',
        height: Dimensions.get('window').height,
        padding: 30, // Use numbers instead of 'px'
        lineHeight: 40 // Use numbers instead of 'px'
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
   para:{
    fontWeight:'light',
    color:'#aaa'
   },
   head:{
    flex:0.3,
fontSize:20,
textAlign:'right',
padding:10,
textTransform:'capitalize',
fontWeight:'300'
   },
   link:{
color:'red'
   },
   sliding:{
display:'flex',
gap:0,
   },
   slider:{
backgroundColor:'green',
borderRadius:50,
padding:10
   },
   slide:{
    backgroundColor:'yellow',
    
       },
       slid:{
        backgroundColor:'',
        
           }
});
