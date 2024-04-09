import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import CardsProps from '../components/UI/cardsprops';
import cardData from "../components/cards"; // Assuming the array is exported as 'cardData'
import Header from "../components/UI/Header";

export default function HomeScreen() {
    const [cards, setCards] = useState(cardData);

    return (
        <ScrollView style={{ backgroundColor: '#F4F4FA', flex: 1 }}>
            <Header backgroundColor="">
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.noti}>Hola, Diane</Text>
                        <Text style={styles.easy}>Find an easy parking spot</Text>
                    </View>

                    <View style={styles.not}>
                        <Image source={require("../assets/Notification.png")} />
                    </View>
                </View>
            </Header>
            <Text style={styles.texta}>Categories</Text>
            <View style={styles.carding}>
                <View style={styles.cardx}>
                    <View style={styles.card1}>
                        <Image source={require("../assets/car.png")} />
                        <Text>Car</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require("../assets/bike.png")} />
                        <Text>Bike</Text>
                    </View>
                    <View style={styles.card1}>
                        <Image source={require("../assets/bus.png")} />
                        <Text>Bus</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require("../assets/van.png")} />
                        <Text>Van</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Nearest Parking Spaces</Text>
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
    );
}
const styles = StyleSheet.create({
    carding: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    easy: {
        fontSize: 16,
        color: '#757985',
        fontWeight: '300'
    },
    cardx: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    card: {
        backgroundColor: '#FFFF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        gap: 5,
    },
    card1: {
        backgroundColor: '#FFFF',
        gap: 5,
        padding: 20,
        borderRadius: 20
    },
    texta: {
        paddingLeft: 20,
        fontSize: 18,
    },
    text: {
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 20
    },
    not: {
        backgroundColor: '#2A344E',
        padding: 10,
        borderRadius: 9
    },
    noti: {
        fontSize: 24,
        color: '#FFFF'
    }
});
