import React from "react";
import { View } from "react-native";
import CardsProps from '../components/cardsprops';

export default function HomeScreen({items}:any) {
    return (
        
            <CardsProps head='hello world' hello='gogolez' dollar='7$' hr='/hour' time="7min" />
       
    );
}
