import React from "react";
import CardsProps from '../components/UI/cardsprops';
import cardData from '../components/cards'
import { ScrollView,Image } from "react-native";
import CustomText from "../components/UI/CustomText";
import { useState } from "react";
import { View ,StyleSheet} from "react-native";


export default function Explore(){
    const [cards, setCards] = useState(cardData);
    return (
        <>
        <ScrollView style={styles.scroll}>
            <CustomText style={styles.dot}>Explore</CustomText>
            <View style ={styles.news}>
                <CustomText style={styles.newest}>Nearst</CustomText>
            <CustomText style={styles.most}>Most Popular</CustomText>
            <CustomText style={styles.most}>Most Wanted</CustomText>
            </View>
       
        {cards.map((card) => (
                <CardsProps
                    key={card.id}
                    children={<Image source={card.image} />}
                    head={card.title}
                    hello={card.greating}
                    hr={card.hr}
                    dollar={card.money}
                    time={card.time}
                />
            ))}
           
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    news:{
flex:0.6,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
gap:20,
padding:20
    },
    newest:{
        backgroundColor:'#081024',
        color:'#ffff',
        padding:14,
        borderRadius:8,
        borderBottomEndRadius:70
    },
    most:{
        color:'gray'
    },
    scroll:{
        backgroundColor:'#F4F4FA'
    },
    dot:{
textAlign:'center',
fontSize:20,
padding:20
    }
})